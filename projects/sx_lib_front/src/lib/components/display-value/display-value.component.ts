import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef, HostListener,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ViewModel } from './view.model';
import { CurrencyPipe, DatePipe, NgClass, NgFor, NgIf } from "@angular/common";
import { cpfCnpjPipe } from '../../pipes/cpf-cnpj.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LabelComponent } from '../label/label.component';
import { BadgesComponent } from '../badges';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'sx-display-value',
  templateUrl: './display-value.component.html',
  styleUrls: ['./display-value.component.scss'],
  imports: [NgIf, MatTooltipModule, LabelComponent, NgFor, NgClass, BadgesComponent]
})
export class DisplayValueComponent implements OnChanges, AfterViewInit {
  @Input() view: ViewModel | any;
  @Input() value: any | any[];
  @Input() indexItem: number | any;
  @Input() showValue = true;

  @ViewChild('textElement') textElement: ElementRef | any;
  showTooltip = false;
  showIcon = false;

  labelFormatterTruncated: string | any;
  valueFormatterList: string[] = [];
  valueFormatterTruncatedList: string[] = [];
  tooltipText: string | any;
  datePipe: DatePipe = new DatePipe('pt-BR');
  cpfCnpjPipe: cpfCnpjPipe = new cpfCnpjPipe();
  currencyPipe: CurrencyPipe = new CurrencyPipe('pt-BR');
  truncatePipe: TruncatePipe = new TruncatePipe();

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges) {
    setTimeout(() => {
      this.getValueFormatter();
    }, 50);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getValueFormatter();
    }, 200);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getValueFormatter();
  }

  getValueFormatter() {
    const truncateLimitLabel = this.getCharacterCount(true);
    const truncateLimitValue = this.getCharacterCount(false);
    this.labelFormatterTruncated = this.getTruncatePipe(this.view.label, truncateLimitLabel);
    this.valueFormatterList = [];
    this.valueFormatterTruncatedList = [];
    this.tooltipText = `${this.view.label}`;
    if (Array.isArray(this.value)) {
      this.value.forEach(value => {
        this.valueFormatterList.push(this.getPipe(value));
      });
      this.valueFormatterList.forEach(valueFormatter => {
        this.valueFormatterTruncatedList.push(this.getTruncatePipe(valueFormatter, truncateLimitValue));
        if (this.showValue) {
          this.tooltipText = this.tooltipText + ` \n ${valueFormatter}`;
        }
      });
     this.valueFormatterTruncatedList.forEach(valueFormatterTruncated => {
       const showTooltip = this.getShowTooltip(valueFormatterTruncated, this.labelFormatterTruncated);
       if (showTooltip) this.showTooltip = true;
     });
    } else {
      this.valueFormatterList.push(this.getPipe(this.value));
      this.valueFormatterTruncatedList.push(this.getTruncatePipe(this.valueFormatterList[0], truncateLimitValue));
      this.showTooltip = this.getShowTooltip(this.valueFormatterTruncatedList[0], this.labelFormatterTruncated);
      if (this.showValue) {
        this.tooltipText = this.tooltipText + ` \n ${this.valueFormatterList[0]}`;
      }
    }
    this.showIcon = this.getShowIcon();
    this.cdr.detectChanges();
  }

  getShowTooltip(valueFormatterTruncated: string, labelFormatterTruncated: string): boolean {
    return valueFormatterTruncated.toString().includes('...') || labelFormatterTruncated.toString().includes('...');
  }

  getShowIcon(): boolean {
    let haveTruncatedInValue = false;
    for (let i = 0; i < this.valueFormatterTruncatedList.length; i++) {
      if (this.valueFormatterTruncatedList[i].includes('...')) {
        haveTruncatedInValue = true;
      }
    }
    return !this.labelFormatterTruncated.includes('...') && !haveTruncatedInValue &&  !!this.view?.labelIcon;
  }

  getPipe(value: string | any): string {
    if (value == null) return 'Não informado';
    switch (this.view.type) {
      case "date":
        value = this.datePipe.transform(value, 'dd/MM/yyyy');
        break;
      case "cpfCnpj":
        value = this.cpfCnpjPipe.transform(value);
        break;
      case "currency":
        value = this.currencyPipe.transform(value);
        break;
      case "boolean":
        value = value ? 'Sim' : 'Não';
        break;
    }
    return value;
  }

  getTruncatePipe(value: string, limit: number): string {
    return this.truncatePipe.transform(value, limit);
  }

  getCharacterCount(isLabel: boolean) {
    const containerWidth = this.textElement.nativeElement.offsetWidth;
    const fontSize = parseFloat(window.getComputedStyle(this.textElement.nativeElement).fontSize);
    const averageCharacterWidth = this.getAverageCharacterWidth(fontSize);
    const availableCharacters = Math.floor(containerWidth / averageCharacterWidth);
    return isLabel ? (availableCharacters - 3) : (availableCharacters + 2);
  }

  getAverageCharacterWidth(fontSize: number): number {
    return fontSize * 0.6;
  }
}

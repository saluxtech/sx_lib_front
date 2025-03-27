import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { OptionModel } from '../../models';
import { DynamicGetService } from '../../services/dynamic-get/dynamic-get.service';
import { SelectComponent } from '../select';
import { DynamicSelectParser } from './dynamic-select.parser';
import { ApiResourceType } from './types';

@Component({
  selector: 'sx-fetch-select',
  imports: [SelectComponent],
  templateUrl: './fetch-select.component.html',
  styleUrl: './fetch-select.component.scss',
  standalone: true,
})
export class FetchSelectComponent implements OnInit {
  @Input() resourceType!: ApiResourceType;
  @Input() label = '';
  @Input() apiPageSize = 500;

  isLoading = false;
  selectOptions: OptionModel[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private dynamicGetService: DynamicGetService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadOptions();
  }

  loadOptions(): void {
    this.isLoading = true;
    this.dynamicGetService
      .dynamicGet(this.resourceType, this.apiPageSize)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        const parser = DynamicSelectParser.getParser(this.resourceType);
        this.selectOptions = parser(data);
        this.cdr.detectChanges();
      });
  }
}

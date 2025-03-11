import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ViewListModel } from './view-list.model';
import { NgFor, NgIf } from '@angular/common';
import { DisplayValueComponent } from '../display-value';

@Component({
  selector: 'sx-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss'],
  imports: [NgIf, NgFor, DisplayValueComponent]
})
export class ViewListComponent implements OnChanges {
  @Input() item: any;
  @Input() viewList: ViewListModel[] | any;

  valueList: any[] | any[][] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (this.item) this.getValue();
  }

  getValue() {
    this.valueList = [];
    this.viewList.forEach((view: any) => {
      if (!Array.isArray(view?.prop)) {
        this.valueList.push(this.item[view?.prop]);
      } else {
        const valueList: any[] = [];
        view?.prop.forEach((element: any) => {
          valueList.push(this.item[element]);
        });
        this.valueList.push(valueList);
      }
    });
  }
}

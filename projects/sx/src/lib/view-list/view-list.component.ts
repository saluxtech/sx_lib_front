import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ViewListModel } from "./model/view-list.model";

@Component({
  selector: 'sx-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss'],
  standalone: false
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

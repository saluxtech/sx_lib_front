import { ViewModel } from "../display-value/model/view.model";

export interface ViewListModel extends ViewModel {
    prop: string | string[];
    columnLg: number;
    columnSm: number;
}

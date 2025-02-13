import {RangeDateDatepickerModel} from "../components/sx-datepicker/model/range-date-datepicker.model";

export function transformaEuaDataEmDataDatepickerUtil(dateString: string): RangeDateDatepickerModel {
  const date = new Date(dateString);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  };
}

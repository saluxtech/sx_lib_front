import { RangeDateDatepickerModel } from "sx_lib_front";

export function transformaEuaDataEmDataDatepickerUtil(dateString: string): RangeDateDatepickerModel {
  const date = new Date(dateString);
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate()
  };
}

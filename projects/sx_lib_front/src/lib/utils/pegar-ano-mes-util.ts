import * as moment from "moment";

export const pegarAnoEMes = (data) => {

  const mounth = moment().diff(data, 'months');
  const year = moment().diff(data, 'years');
  const mounthFormatter = mounth - (year * 12);
  const yearText = year > 1 ? 'anos' : 'ano';
  const mounthText = mounthFormatter > 1 ? 'meses' : 'mês';
  return `${year} ${yearText} e ${mounthFormatter} ${mounthText}`;
}

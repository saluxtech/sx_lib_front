export interface HttpRequestModel<T> {
  Data: T;
  Error: any;
  Messages: string | null;
  StatusCode: number;
  Success: boolean;
}

export interface HttpRequestData<T> {
  Dados: T;
  NumeroPagina: number;
  TamanhoPagina: number;
  TotalRegistros?: number;
}

export interface  HttpResponseData<T> {
  Data: T;
  Error: any;
  Messages: Array<{key: string, value: string}>;
  StatusCode: number;
  Success: boolean;
}

export interface Meta {
  total: number;
  page: number;
  perPage: number;
  totalPages: number | null;
}
export interface ApiResponseData<T> {
  meta: Meta;
  data: T;
  errors: Record<string, any>;
}
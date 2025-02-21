export interface Endereco {
  Logradouro: string;
  CodigoTipoLogradouro: number;
  TipoLogradouro: string;
  CodigoUF?: string;
  UF?: string;
  Bairro?: string;
  CodigoMunicipio: number;
  Municipio: string;
  Cep?: string;
  Numero?: string;
  NumeroLogradouro?: string;
  Complemento?: string;
}

export interface CidadeByUF {
  Nome: string;
  Codigo: number;
  CodigoUF: string;
  UF: string;
  CodigoIbge: string;
}
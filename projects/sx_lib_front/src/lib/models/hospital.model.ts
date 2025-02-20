
export interface HospitalModel {
    CNPJ: string;
    CODIGO_HOSPITAL: string;
    ENDERECO: string;
    E_MAIL: string;
    NR_CNES: string;
    SC_HOSPITAL: string;
    TELEFONE: string;
    CodigoTipoEstabelecimento?: number;
}

export interface HospitalParametros {
  HospitalLogo: string;
  IntegraBi: string;
  NomeLogradouro: string;
  Cep: string;
  ComplementoLogradouro: string;
  NumeroLogradouro: string;
  CodigoMunicipio: number;
  Municipio: string;
  CodigoTipoLogradouro: number;
  CodigoUf: number;
  Uf: string;
  TipoLogradouro: string;
  Bairro: string;
  codigo_hospital?: string;
}

export interface HospitalUnidade {
  cd_hospital?: number;
  cd_unidade: number;
  cd_centro_custo?: number;
  sc_unidade: string;
  id_unidade?: string;
  in_unid_obstetrica?: string;
  qt_leito_fixo?: number;
  cd_funcionario?: string;
  cd_gerencia?: number;
  id_condicao_unidade?: string;
  id_tipo_uti?: number;
}
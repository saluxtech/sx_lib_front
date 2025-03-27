import { OptionModel } from "../../models";

export enum ApiResourceType {
  PLANOS_SAUDE = 'planos-saude',
  TIPOS_PLANOS_FILTROS = 'tipos-planos-filtros',
  BARREIRAS_COMUNICACAO = 'barreiras-comunicacao',
  CORES_PELE = 'cores-pele',
  ESTADOS_CIVIS = 'estados-civis',
  ETNIAS = 'etinias',
  GRAUS_INSTRUCAO = 'graus--instrucao',
  GRAUS_PARENTESCO = 'graus-parentesco',
  NACIONALIDADES_SUS = 'nacionalidades-sus',
  NIVEIS_VIP = 'niveis-vip',
  RELIGIOES = 'religioes',
  TIPOS_FONES = 'tipos-fones',
  TIPOS_LOGRADOUROS = 'tipos-logradouros',
  UNIDADES_FEDERATIVAS = 'unidades-federativas',
  UNIDADES_SAUDE = 'unidades-saude',
}

export type ParserFunction = (data: any) => OptionModel[];

export interface PlanosSaude {
  cd_Plano_Saude: number;
  ds_Plano_Saude: string;
  tp_Convenio: string;
}

export interface TiposPlanosFiltros {
  cd_Tp_Plano: number;
  sc_Tp_Plano_Saude: string;
  cd_Plano_Saude: number;
  tipo_Plano_In_Hospitalar: string;
}

export interface BarreirasComunicacao {
  cd_Barreira_Comunicacao: number;
  ds_Barreira_Comunicacao: string;
}

export interface CoresPele {
  cd_Cor: number;
  sc_Cor: string;
}

export interface EstadosCivis {
  cd_Est_Civil: number;
  ds_Est_Civil: string;
}

export interface Etnias {
  cd_Etnia: number;
  ds_Etnia: string;
}

export interface GrausInstrucao {
  cd_Grau_Instrucao: number;
  ds_Grau_Instrucao: string;
}

export interface GrausParentesco {
  cd_Grau_Parentesco: number;
  ds_Grau_Parentesco: string;
}

export interface NacionalidadesSus {
  cd_Nacionalidade: number;
  ds_Nacionalidade: string;
}

export interface NiveisVip {
  cd_Vip: number;
  ds_Vip: string;
  in_Ativo: string;
}

export interface Religioes {
  cd_Religiao: number;
  ds_Religiao: string;
}

export interface TiposFones {
  cd_Tipo_Fone: number;
  ds_Tipo_Fone: string;
}

export interface TiposLogradouros {
  cd_Tp_Logr: number;
  nm_Tp_Logr: string;
}

export interface UnidadesSaude {
  cd_unidade_saude: string;
  cd_uf: string;
  ds_unidade_saude: string;
  cd_cidade: number;
}

export interface UnidadesFederativas {
  cd_Uf: number;
  ds_Uf: string;
}

export interface Triagem {
  AnoMovimento: string;
  CAMPOS: TriagemCampo[];
  CD_ACOLHIMENTO: number;
  CD_FUNCIONARIO: string;
  CD_PACIENTE: number;
  CdHospital: string;
  DT_ANO_FIA_BAA: string;
  DataInclusao: string;
  FIA_BAA_CD_HOSPITAL: string;
  IdMovimento: string;
  NM_PACIENTE: string;
  NR_FIA_BAA: string;
  NomeHospital: string;
  NomeProfissional: string;
  TP_ATENDIMENTO: string;
  TipoProfissional: string;
}

export interface TriagemCampo {
  CHAVE: number;
  DS_CAMPO: string;
  LIMITE: number;
  OPCOES: TriagemCampoOpcao[];
  TIPO: string;
  VALOR: string;
}

export interface TriagemCampoOpcao {
  cor: string;
  in_checado: string;
  key: string;
  opcao: string;
}

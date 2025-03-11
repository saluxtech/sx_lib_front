import { GeneroEnum } from "../enums/genero.enum";
import { TipoEnum } from "../enums/tipo.enum";

export interface PacienteModel {
  ALERGIAS: string[];
  ANO_FIA_BAA: number;
  ATENDIDO: string;
  CD_CIDADE: number;
  CD_LEITO: string;
  CD_QUARTO: number;
  CD_SETOR: string;
  CNS: string;
  CODIGO_CLASSIFICACAO_RISCO: string;
  CODIGO_CONSELHO: string;
  CODIGO_COR_ATENDIDOS: string;
  CODIGO_COR_ATENDIMENTO: string;
  CODIGO_COR_CLASSIFICACAO_RISCO: string;
  CODIGO_COR_NAO_ATENDIDOS: string;
  CODIGO_FUNCIONARIO: string;
  PROFISSAO: string;
  CODIGO_HOSPITAL: number;
  CODIGO_MEDICO: number;
  CODIGO_PACIENTE: number;
  CODIGO_SALA_AMBULATORIO: string;
  CODIGO_UNIDADE_HOSPITALAR: number;
  CONVENIO: string;
  COR_PELE: string;
  C_CLASSIFICACAO_RISCO_QT_TEMPO: number;
  DATA_ENTRADA: string;
  DS_CLASSIFICACAO_RISCO: string;
  DS_SALA_AMBULATORIO: string;
  DS_SETOR: string;
  DT_ENTRADA_SETOR: string;
  DT_NASCIMENTO: string; // "1971-08-15T00:00:00"
  IDADE: string; // "52 anos 4 meses 26 dias"
  ID_AGENDAMENTO_WEB: string;
  ID_TEMPO_ESPERA: string;
  IN_USA_COR_CLASSIFICACAO: string;
  MOTIVO_ATENDIMENTO: string;
  NM_PACIENTE: string;
  NOME_MAE: string;
  NOME_MEDICO: string;
  NR_FIA_BAA: number;
  PACIENTE_ENDERECO: string;
  PRESC_ATUAL: number;
  PRESC_PROXIMA: number;
  QT_MINUTOS_ESPERA: number;
  QT_MINUTOS_TRIAGEM: string;
  QT_TEMPO_SETOR: string;
  SC_UNIDADE_HOSPITALAR: string;
  SEXO: GeneroEnum;
  TIPO: TipoEnum;
  TIPO_PROFISSIONAL: string;
  CPF?: string;
  EMAIL?: string;
  DDD_TELEFONE?: string;
  TELEFONE?: string;
  DDD_CELULAR?: string;
  CELULAR?: string;
  BG_COLOR?: string;
  COLOR?: string;
}

export interface PacienteFIABAA {
  nomeMae: string;
  cns: string;
  dataNascimento: string;
  corPele: string;
  codigoPaciente: number;
  pacienteNome: string;
  pacienteIdade: string;
  pacienteSexo: string;
  fiaCodigoHospital: number;
  fiaAnoAtendimento: number;
  fiaNumeroAtendimento: number;
  baaCodigoHospital: number;
  baaAnoAtendimento: number;
  baaNumeroAtendimento: number;
  isFia: boolean;
  isBaa: boolean;
  tipo: string;
  codigoSetorOrigem: string | null;
  cpf: string;
  email?: string;
  dddTelefone?: string;
  telefone?: string;
  dddCelular?: string;
  celular?: string;
  codigoFuncionario?: string;
  pacienteEndereco?: string;
}

export interface PacienteTelefone {
  NumeroDDDFone: string;
  NumeroFone: string;
  TipoFone: "CELULAR" | "RESIDENCIAL";
}

export interface PacienteListarParams {
  nrbaaAno?: string;
  cdhospital?: string;
  CdFuncionario?: string;
  NomePaciente?: string;
  dataNascimento?: string;
}

export interface PacienteDadosCadastrais {
  CodigoPaciente: number;
  Nome: string;
  NomeAfetivo: string;
  DataNascimento: Date;
  Cpf: string;
  Cns: string;
  Sexo: string;
  CodigoCor: number;
  NomeMae: string;
  NomePai: string;
  CodigoNacionalidade: number;
  CodigoMunicipioNascimento: number;
  CodigoUfNascimento: string;
  CodigoEquipeResponsavel: number;
  CodigoUnidadeResponsavel: number;
  CodigoHospitalResponsavel: number;
  CodigoEstadoCivil: string;
  TipoSanguineo: string;
  FatorRH: string;
  CodigoEscolaridade: number;
  IdentidadeGenero: string;
  OrientacaoSexual: null;
  Ocupacao: string;
  EstadoCivil: string;
  Email: string;
  NumeroDDDResidencial: number;
  NumeroTelefoneResidencial: string;
  NumeroDDDCelular: number;
  NumeroTelefoneCelular: string;
  CodigoTipoLogradouro: number;
  Logradouro: string;
  NumeroLogradouro: number;
  ComplementoLogradouro: string;
  PontoReferencia: string;
  Bairro: string;
  Cep: string;
  CodigoMunicipio: number;
  Municipio: string;
  CodigoUF: string;
  UF: string;
  Area: string;
  Microarea: string;
  Pais: string;
  Nacionalidade: string;
  NacionalidadeBrasil: string;
  CorPele: string;
  MunicipioNascimento: string;
  UfNascimento: string;
  EquipeResponsavel: string;
  UnidadeResponsavel: string;
  Escolaridade: string;
  TipoLogradouro: string;
}

export interface PacienteOpcoesDadosCadastrais {
  TipoSanguineo: string[];
  NacionalidadeBrasil: PacienteOpcaoItem;
  Ufs: PacienteOpcaoItem[];
  Escolaridades: PacienteOpcaoItem[];
  Cores: PacienteOpcaoItem[];
  EstadosCivis: PacienteOpcaoItem[];
}

export interface PacienteOpcaoItem {
  Codigo: number | string;
  Nome: string;
}

export interface PacienteEscalaScore {
  Idade: number;
  MaiorOuIgual80Anos: boolean;
  ScoresFramingham?: PacienteScoreFraminghamIVCF;
  ScoreIVCF20?: PacienteScoreFraminghamIVCF;
  ScoresCockroftGault?: PacienteScoreCockroftGault;
}

export interface PacienteScoreFraminghamIVCF {
  Resultado: number;
  Interpretacao: string;
}

export interface PacienteScoreCockroftGault {
  TFG: number;
  Estagio: string;
  Definicao: string;
}
export interface PacienteScoreFramingham {
  Fumante: boolean;
  Diabetes: boolean;
  TratamentoHas: boolean;
  CodigoHospital: number;
  NumeroFiaBaa: number;
  DataAnoFiaBaa: number;
  cdPaciente: any;
}

export interface PacienteScoreCockroftGault{
  CodigoHospital: number;
  AnoAtendimento: number;
  NumeroAtendimento: number;
  TipoAtendimento: string;
  CodigoPaciente?: number;
  Peso?: number;
  Creatinina?: number
}

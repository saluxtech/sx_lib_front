import { OptionModel } from '../../models';
import {
  ApiResourceType,
  BarreirasComunicacao,
  CoresPele,
  EstadosCivis,
  Etnias,
  GrausInstrucao,
  GrausParentesco,
  NacionalidadesSus,
  NiveisVip,
  PlanosSaude,
  Religioes,
  TiposFones,
  TiposLogradouros,
  TiposPlanosFiltros,
  UnidadesFederativas,
  UnidadesSaude,
} from './types';

export class DynamicSelectParser {
  static parsePlanosSaude(data: PlanosSaude[]): OptionModel[] {
    return data.map((item) => ({
      value: item.cd_Plano_Saude,
      label: item.ds_Plano_Saude,
    }));
  }

  static parseTiposPlanosFiltros(data: TiposPlanosFiltros[]): OptionModel[] {
    return data.map((item) => ({
      label: item.sc_Tp_Plano_Saude,
      value: item.cd_Tp_Plano,
    }));
  }

  static parseBarreirasComunicacao(
    data: BarreirasComunicacao[]
  ): OptionModel[] {
    return data.map((item) => ({
      label: item.ds_Barreira_Comunicacao,
      value: item.cd_Barreira_Comunicacao,
    }));
  }

  static parseCoresPele(data: CoresPele[]): OptionModel[] {
    return data.map((item) => ({
      label: item.sc_Cor,
      value: item.cd_Cor,
    }));
  }

  static parseEstadosCivis(data: EstadosCivis[]): OptionModel[] {
    return data.map((item) => ({
      label: item.ds_Est_Civil,
      value: item.cd_Est_Civil,
    }));
  }

  static parseEtnias(data: Etnias[]): OptionModel[] {
    return data.map((item) => ({
      label: item.ds_Etnia,
      value: item.cd_Etnia,
    }));
  }

  static parseGrausInstrucao(data: GrausInstrucao[]): OptionModel[] {
    return data.map((item) => ({
      label: item.ds_Grau_Instrucao,
      value: item.cd_Grau_Instrucao,
    }));
  }

  static parseGrausParentesco(data: GrausParentesco[]): OptionModel[] {
    return data.map((item) => ({
      label: item.ds_Grau_Parentesco,
      value: item.cd_Grau_Parentesco,
    }));
  }
  static parseNacionalidadesSus(data: NacionalidadesSus[]): OptionModel[] {
    return data.map((item) => ({
      label: item.ds_Nacionalidade,
      value: item.cd_Nacionalidade,
    }));
  }

  static parseNiveisVip(data: NiveisVip[]): OptionModel[] {
    return data.map((item) => ({
      label: item.ds_Vip,
      value: item.cd_Vip,
    }));
  }

  static parseReligioes(data: Religioes[]): OptionModel[] {
    return data.map((item) => ({
      label: item.ds_Religiao,
      value: item.cd_Religiao,
    }));
  }

  static parseTiposFones(data: TiposFones[]): OptionModel[] {
    return data.map((item) => ({
      label: item.ds_Tipo_Fone,
      value: item.cd_Tipo_Fone,
    }));
  }

  static parseTiposLogradouros(data: TiposLogradouros[]): OptionModel[] {
    return data.map((item) => ({
      label: item.nm_Tp_Logr,
      value: item.cd_Tp_Logr,
    }));
  }

  static parseUnidadesSaude(data: UnidadesSaude[]): OptionModel[] {
    return data.map((item) => ({
      label: item.ds_unidade_saude,
      value: item.cd_unidade_saude,
    }));
  }

  static parseUnidadesFederativas(data: UnidadesFederativas[]): OptionModel[] {
    return data.map((item) => ({
      label: item.ds_Uf,
      value: item.cd_Uf,
    }));
  }

  static getParser(
    resourceType: ApiResourceType
  ): (data: any) => OptionModel[] {
    switch (resourceType) {
      case ApiResourceType.PLANOS_SAUDE:
        return this.parsePlanosSaude;
      case ApiResourceType.TIPOS_PLANOS_FILTROS:
        return this.parseTiposPlanosFiltros;
      case ApiResourceType.BARREIRAS_COMUNICACAO:
        return this.parseBarreirasComunicacao;
      case ApiResourceType.CORES_PELE:
        return this.parseCoresPele;
      case ApiResourceType.ESTADOS_CIVIS:
        return this.parseEstadosCivis;
      case ApiResourceType.ETNIAS:
        return this.parseEtnias;
      case ApiResourceType.GRAUS_INSTRUCAO:
        return this.parseGrausInstrucao;
      case ApiResourceType.GRAUS_PARENTESCO:
        return this.parseGrausParentesco;
      case ApiResourceType.NACIONALIDADES_SUS:
        return this.parseNacionalidadesSus;
      case ApiResourceType.NIVEIS_VIP:
        return this.parseNiveisVip;
      case ApiResourceType.RELIGIOES:
        return this.parseReligioes;
      case ApiResourceType.TIPOS_FONES:
        return this.parseTiposFones;
      case ApiResourceType.TIPOS_LOGRADOUROS:
        return this.parseTiposLogradouros;
      case ApiResourceType.UNIDADES_FEDERATIVAS:
        return this.parseUnidadesFederativas;
      case ApiResourceType.UNIDADES_SAUDE:
        return this.parseUnidadesSaude;
      default:
        throw new Error(`Parser não implementado para ${resourceType}`);
    }
  }
}

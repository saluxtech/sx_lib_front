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
    const resourceMap: any = {
      [ApiResourceType.PLANOS_SAUDE]: this.parsePlanosSaude,
      [ApiResourceType.TIPOS_PLANOS_FILTROS]: this.parseTiposPlanosFiltros,
      [ApiResourceType.BARREIRAS_COMUNICACAO]: this.parseBarreirasComunicacao,
      [ApiResourceType.CORES_PELE]: this.parseCoresPele,
      [ApiResourceType.ESTADOS_CIVIS]: this.parseEstadosCivis,
      [ApiResourceType.ETNIAS]: this.parseEtnias,
      [ApiResourceType.GRAUS_INSTRUCAO]: this.parseGrausInstrucao,
      [ApiResourceType.GRAUS_PARENTESCO]: this.parseGrausParentesco,
      [ApiResourceType.NACIONALIDADES_SUS]: this.parseNacionalidadesSus,
      [ApiResourceType.NIVEIS_VIP]: this.parseNiveisVip,
      [ApiResourceType.RELIGIOES]: this.parseReligioes,
      [ApiResourceType.TIPOS_FONES]: this.parseTiposFones,
      [ApiResourceType.TIPOS_LOGRADOUROS]: this.parseTiposLogradouros,
      [ApiResourceType.UNIDADES_FEDERATIVAS]: this.parseUnidadesFederativas,
      [ApiResourceType.UNIDADES_SAUDE]: this.parseUnidadesSaude,
    };

    if (!resourceMap.hasOwnProperty(resourceType)) {
      throw new Error(`Parser não implementado para ${resourceType}`);
    }

    return resourceMap[resourceType].bind(this);
  }
}
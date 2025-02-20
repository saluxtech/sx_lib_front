export interface FabricanteVacinaModel {
    CodigoVacinaFabricante: number;
    CnpjFabricante: string;
    DescricaoFabricante: string;
    EnderecoFabricante: string;
    TelefoneFabricante: string;
    CodigoFuncionario: string;
    DataInclusao: string;
}

export interface VacinaTipoDto {
    CodigoVacinaTipo: number; 
    DescricaoVacinaTipo: string
}

export interface FabricanteDto {
    CodigoVacinaFabricante: number;
    NomeVacinaFabricante: string;
}
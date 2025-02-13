export interface ArrayHeader {
    label: string;
    value: string;
    header: string;
    lista: string;
    complementoHeader?: string;
    complementoValue?: string;
    validarData?: boolean;
    pipe?: 'date' | 'currency';
}

export interface HeaderCardModel {
    label?: string;
    value: string;
}
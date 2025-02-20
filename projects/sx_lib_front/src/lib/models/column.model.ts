
export interface ColumnModel {
    key: string;
    label: string;
    type: 'text' | 'date' | 'chip';
    chipsRules?: (value: any) => ChipsRulesModel;
}


export interface ChipsRulesModel {
    color: string;
    backgroundColor: string
}

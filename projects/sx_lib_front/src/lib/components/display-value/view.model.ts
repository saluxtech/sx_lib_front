import { labelColorType, labelSizeType, labelType } from "../label/label.type";
import { ViewListModel } from "../view-list/view-list.model";

export interface ViewModel {
    id?: number;
    label: string;
    type: ViewType;
    cantBreakLine?: boolean;
    textWhenNull?: string;
    labelSize?: 'small' | 'default';
    labelColor?: labelColorType;
    labelType?: labelType;
    labelIcon?: string;
    valueSize?: labelSizeType;
    valueColor?: labelColorType;
    valueType?: labelType;
    children?: ViewListModel[];
    usingIndexItem?: boolean;
    class?: string;
    justifyContent?: 'center' | 'start' | 'end';

    actionButton?: () => void;
}

export type ViewType = 'text' | 'divide' | 'date' | 'currency' | 'cpfCnpj' | 'cep' | 'boolean' | 'arrayObject' | 'badges';

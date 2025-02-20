
export interface ActionTableModel {
    label: string;
    icon: string;
    action: (value: any) => void;
    disabled?: (value: any) => boolean;
}

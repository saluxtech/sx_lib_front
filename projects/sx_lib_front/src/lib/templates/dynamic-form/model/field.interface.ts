import { OptionModel } from "sx_lib_front";

export interface Field {
    type: FieldType;
    name: string;
    label: string;
    size?: number;
    placeholder?: string;
    errorMessage?: string;
    validators?: {
      required?: boolean;
      minLength?: number;
      email?: boolean;
    };
    fields?: Field[];
    value?: any;
    options: OptionModel[];
    error: string;
    action?: (event: any) => any;
}

export interface Fields {
    fields: Field[];
}

export type FieldType = 'text' | 'email' | 'password' | 'number' | 'date' | 'select' | 'radio' | 'checkbox' | 'textarea' | 'file' | 'foto' | 'button';
export interface Field {
    type: FieldType;
    name: string;
    label: string;
    size?: number;
    validators?: {
      required?: boolean;
      minLength?: number;
      email?: boolean;
    };
    fields?: Field[];
    value?: any;
    action?: (event: any) => any;
}

export interface Fields {
    fields: Field[];
}

export type FieldType = 'text' | 'email' | 'password' | 'number' | 'date' | 'select' | 'radio' | 'checkbox' | 'textarea' | 'file' | 'foto' | 'button';
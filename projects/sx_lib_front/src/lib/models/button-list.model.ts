import { HeaderButtons } from "sx_lib_front";

export interface ButtonList {
    icon?: string;
    event?: HeaderButtons;
    variation?: 'raised' | 'stroked' | 'ghost';
    label?: string;
}
import { HeaderButtonEvent } from "sx_lib_front";

export interface HeaderButton {
    icon?: string;
    event?: HeaderButtonEvent;
    variation?: 'raised' | 'stroked' | 'ghost';
    label?: string;
}
export interface SideMenuItem {
    icon?: string;
    label: string;
    route: string;
    children?: SideMenuItem[];
}
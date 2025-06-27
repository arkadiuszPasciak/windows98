import { MenuItem } from '../../../domain/models';
export declare enum MenuItemVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
export interface MenuItemProps {
    variant: MenuItemVariant;
}
export type UseMenuItem = Pick<MenuItem, "id">;

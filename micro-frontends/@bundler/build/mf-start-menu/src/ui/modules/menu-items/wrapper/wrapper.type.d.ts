import { PropsWithChildren } from 'react';
export declare enum MenuItemsWrapperVariant {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
export interface MenuItemsWrapperProps extends PropsWithChildren {
    variant: MenuItemsWrapperVariant;
}

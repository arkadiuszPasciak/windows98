import { PropsWithChildren } from 'react';
import { MenuItem } from '../../../../domain/models';
import { MenuItemProps } from '../menu-item.type';
export type MenuItemContentProps = MenuItemProps & {
    name: string;
} & PropsWithChildren & Pick<MenuItem, "id">;
export type GetIconURL = (id: string) => string;

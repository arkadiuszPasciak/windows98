import { PropsWithChildren } from 'react';
import { GroupMenuItem } from '../../../../domain/models';
import { MenuItemProps } from '../menu-item.type';
export type MenuItemGroupProps = MenuItemProps & Pick<GroupMenuItem & PropsWithChildren, "id" | "type"> & PropsWithChildren;

import { PropsWithChildren } from 'react';
import { BaseMenuItem, MenuItemType } from '../../../../domain/models';
export type MenuItemWrapperProps = Pick<BaseMenuItem, "id"> & {
    type: MenuItemType;
} & PropsWithChildren;

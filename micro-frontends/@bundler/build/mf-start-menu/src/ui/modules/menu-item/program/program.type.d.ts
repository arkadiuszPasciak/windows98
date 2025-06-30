import { ProgramMenuItem } from '../../../../domain/models';
import { MenuItemProps, UseMenuItem } from '../menu-item.type';
export type MenuItemProgramProps = MenuItemProps & Pick<ProgramMenuItem, "id" | "type"> & {
    closeMenu: () => void;
};
export interface UseMenuItemProgram extends UseMenuItem {
    closeMenu: () => void;
}

import { ProgramMenuItem } from '../../../../domain/models';
import { MenuItemProps } from '../menu-item.type';
export type MenuItemProgramProps = MenuItemProps & Pick<ProgramMenuItem, "id" | "type">;

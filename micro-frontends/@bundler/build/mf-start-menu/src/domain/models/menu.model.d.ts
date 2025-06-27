export declare enum MenuItemType {
    GROUP = "group",
    PROGRAM = "program"
}
export interface BaseMenuItem {
    id: string;
}
export interface ProgramMenuItem extends BaseMenuItem {
    type: MenuItemType.PROGRAM;
}
export interface GroupMenuItem extends BaseMenuItem {
    type: MenuItemType.GROUP;
    programs: MenuItem[];
}
export type MenuItem = ProgramMenuItem | GroupMenuItem;
export type MenuItems = [MenuItem] | [MenuItem, MenuItem] | [MenuItem, MenuItem, ProgramMenuItem];

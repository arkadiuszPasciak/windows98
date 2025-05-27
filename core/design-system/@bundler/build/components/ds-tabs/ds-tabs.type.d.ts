import { ComponentType } from 'react';
export interface DSTabsTab {
    title: string;
    component: ComponentType;
    id: string;
}
export interface DSTabsProps {
    id: string;
    tabs: Array<DSTabsTab>;
}

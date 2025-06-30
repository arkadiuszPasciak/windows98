import { ComponentType } from 'react';
import { DSDefaultProps } from '../../types';
export interface DSTabsTab {
    title: string;
    component: ComponentType;
    id: string;
}
export interface DSTabsProps extends DSDefaultProps {
    id: string;
    tabs: Array<DSTabsTab>;
}

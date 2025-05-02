import { ReactNode } from 'react';
export interface Tabs {
    initialIndex?: number;
    tabs: {
        title: string;
        component: ReactNode;
    }[];
}
export interface DSModalTabsProps extends Tabs {
    id: string;
}
export type useDSModalTabs = Pick<Tabs, "initialIndex">;

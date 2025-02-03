import type { useDSModalTabs } from "./modal-tabs.type";
export declare const useDSTabs: ({ initialIndex }: useDSModalTabs) => {
    activeTab: number | undefined;
    setActiveTab: (index: number) => void;
};

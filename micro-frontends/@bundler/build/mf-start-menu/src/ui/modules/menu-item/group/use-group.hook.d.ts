import { UseMenuItem } from '../menu-item.type';
export declare function usePanelItemGroup({ id }: UseMenuItem): {
    isGroupHovered: boolean;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    translations: {
        name: string;
    };
};

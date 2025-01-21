import type { ReactNode } from "react";
import type { ModalNavigationItem } from "./modal-navigation";
export declare enum DSModalCursor {
    DEFAULT = "default",
    MOVE = "move"
}
export interface DSModalProps {
    children: ReactNode;
    id: string;
    height?: string;
    moveWindow: boolean;
    navigation?: ModalNavigationItem[];
    onClose: () => void;
    resizeWindow?: boolean;
    title: string;
    width?: string;
}
export interface UseDSModalProps extends Pick<DSModalProps, "moveWindow" | "onClose"> {
}

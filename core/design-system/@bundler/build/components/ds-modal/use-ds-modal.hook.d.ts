import { type MouseEvent } from "react";
import { DSModalCursor, type UseDSModalProps } from "./ds-modal.type";
export declare const useDSModal: ({ moveWindow, onClose }: UseDSModalProps) => {
    modalElement: import("react").RefObject<HTMLDivElement>;
    dialogRef: import("react").RefObject<HTMLDialogElement>;
    mouseDown: (event: MouseEvent) => void;
    mouseUp: () => void;
    mouseMove: (event: MouseEvent) => void;
    cursorType: DSModalCursor;
    closeModal: () => void;
};

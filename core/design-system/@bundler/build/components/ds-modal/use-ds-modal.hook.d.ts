import { MouseEvent } from 'react';
import { DSModalCursor, UseDSModalProps } from './ds-modal.type';
export declare const useDSModal: ({ moveWindow, onClose }: UseDSModalProps) => {
    modalElement: import('react').RefObject<HTMLDivElement | null>;
    dialogRef: import('react').RefObject<HTMLDialogElement | null>;
    mouseDown: (event: MouseEvent) => void;
    mouseUp: () => void;
    mouseMove: (event: MouseEvent) => void;
    cursorType: DSModalCursor;
    closeModal: () => void;
};

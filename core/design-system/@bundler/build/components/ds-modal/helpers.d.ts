import type { Dispatch, MouseEvent, RefObject, SetStateAction } from "react";
import { DSModalCursor } from "./ds-modal.type";
export declare const mouseDownEvent: (event: MouseEvent, modalElement: RefObject<HTMLDivElement>, moveWindow: boolean, setCursorType: Dispatch<SetStateAction<DSModalCursor>>, setMouseState: Dispatch<SetStateAction<boolean>>, setPositionX: Dispatch<SetStateAction<number>>, setPositionY: Dispatch<SetStateAction<number>>) => void;
export declare const mouseUpEvent: (moveWindow: boolean, setMouseState: Dispatch<SetStateAction<boolean>>, setCursorType: Dispatch<SetStateAction<DSModalCursor>>) => void;
export declare const mouseMoveEvent: (event: MouseEvent, modalElement: RefObject<HTMLDivElement>, moveWindow: boolean, mouseState: boolean, positionX: number, positionY: number) => void;

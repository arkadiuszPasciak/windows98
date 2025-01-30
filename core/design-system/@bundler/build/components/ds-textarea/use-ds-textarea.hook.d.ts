import { type ChangeEvent } from "react";
import type { UseDSTextareaProps } from "./ds-textarea.type";
export declare function useDSTextarea({ initialValue, onChange }: UseDSTextareaProps): {
    value: string;
    handleTextareaChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

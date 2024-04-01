import { type ChangeEvent } from "react";
import type { UseDSInputProps } from "./index";
export declare function useDSInput({ initialValue, onChange }: UseDSInputProps): {
    value: string | number;
    handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

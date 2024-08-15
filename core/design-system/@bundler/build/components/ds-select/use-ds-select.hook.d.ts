import { type ChangeEvent } from "react";
import type { DSSelectProps } from "./ds-select.type";
export default function useDSSelect(modelValue: DSSelectProps["modelValue"]): {
    value: string | number;
    handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

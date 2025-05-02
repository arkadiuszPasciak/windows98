import { ChangeEvent } from 'react';
import { DSSelectProps } from './ds-select.type';
export default function useDSSelect(modelValue: DSSelectProps["modelValue"]): {
    value: string | number;
    handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

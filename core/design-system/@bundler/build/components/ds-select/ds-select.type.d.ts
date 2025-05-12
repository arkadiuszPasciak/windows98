import { ReactEventHandler } from 'react';
import { DSDefaultProps } from '../../types/component.type';
export interface DSSelectProps extends DSDefaultProps {
    disabled?: boolean;
    id: string;
    labelName?: string;
    modelValue: string | number;
    options: Array<DSSelectOption>;
    required?: boolean;
    onSelect: ReactEventHandler<HTMLSelectElement>;
    wrapperLayout?: "horizontal" | "vertical";
}
export interface DSSelectOption {
    value: string | number;
    name: string;
}

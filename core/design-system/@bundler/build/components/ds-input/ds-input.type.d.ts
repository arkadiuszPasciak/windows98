import { ReactEventHandler } from 'react';
import { DSDefaultProps } from '../../types/component.type';
export interface DSInputProps extends DSDefaultProps {
    type?: "text" | "password" | "email" | "number";
    id: string;
    disabled?: boolean;
    readonly?: boolean;
    initialValue: string | number;
    labelName?: string;
    wrapperLayout?: "horizontal" | "vertical";
    min?: number;
    max?: number;
    onChange?: ReactEventHandler<HTMLInputElement>;
}
export interface UseDSInputProps {
    initialValue: DSInputProps["initialValue"];
    onChange: DSInputProps["onChange"];
}

import type { DSDefaultProps } from "../../types/component.type";
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
    onChange?: (value: string | number) => void;
}
export interface UseDSInputProps {
    initialValue: DSInputProps["initialValue"];
    onChange: DSInputProps["onChange"];
}

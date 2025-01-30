export interface DSTextareaProps {
    id: string;
    disabled?: boolean;
    readonly?: boolean;
    initialValue: string;
    labelName?: string;
    wrapperLayout?: "horizontal" | "vertical";
    min?: number;
    max?: number;
    onChange?: (value: string | number) => void;
}
export interface UseDSTextareaProps {
    initialValue: DSTextareaProps["initialValue"];
    onChange: DSTextareaProps["onChange"];
}

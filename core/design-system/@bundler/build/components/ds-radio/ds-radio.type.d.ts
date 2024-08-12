import { DSDefaultProps } from "../../types/component.type";
export interface DSRadioProps extends DSDefaultProps {
    id: string;
    name: string;
    initialChecked: boolean;
    text: {
        content: string;
        visible: boolean;
    };
    disabled?: boolean;
    onChange: () => void;
}
export interface UseDSRadioProps {
    initialChecked: DSRadioProps["initialChecked"];
    onChange: DSRadioProps["onChange"];
}

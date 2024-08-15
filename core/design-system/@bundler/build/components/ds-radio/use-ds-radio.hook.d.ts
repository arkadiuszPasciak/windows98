import type { UseDSRadioProps } from "./ds-radio.type";
export declare function useDSRadio({ initialChecked, onChange }: UseDSRadioProps): {
    checked: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

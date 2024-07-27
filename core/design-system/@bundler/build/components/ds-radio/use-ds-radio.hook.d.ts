import type { UseDSRadioProps } from "./ds-radio.type";
export declare function useDSRadio({ initialValue, onChange, state, }: UseDSRadioProps): {
    isDisabled: boolean;
    handleChange: () => void;
    value: boolean;
};

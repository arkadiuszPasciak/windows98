import type { UseDSStepperProps } from "./ds-stepper.type";
export declare function useDSStepper({ modelValue, onIncrease, onDecrease }: UseDSStepperProps): {
    value: number;
    handleIncrease: () => void;
    handleDecrease: () => void;
};

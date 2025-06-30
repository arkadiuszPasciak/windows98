import { ReactEventHandler } from 'react';
export declare const useInput: () => {
    setProgramName: ReactEventHandler<HTMLInputElement>;
    translations: {
        label: string;
        placeholder: string;
    };
};

import { ReactEventHandler } from 'react';
export declare const useEnterYourName: () => {
    setPlayerName: ReactEventHandler<HTMLInputElement>;
    translations: {
        label: string;
        placeholder: string;
    };
};

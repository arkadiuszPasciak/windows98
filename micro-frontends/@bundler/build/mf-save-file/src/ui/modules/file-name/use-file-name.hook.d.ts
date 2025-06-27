import { ReactEventHandler } from 'react';
export declare const useFileName: () => {
    setFileName: ReactEventHandler<HTMLInputElement>;
    fileName: import('@windows98/toolkit').Maybe<string>;
    translations: {
        fileName: string;
        untitled: string;
    };
};

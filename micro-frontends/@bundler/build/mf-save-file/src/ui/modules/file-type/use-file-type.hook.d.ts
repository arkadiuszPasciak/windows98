import { ReactEventHandler } from 'react';
export declare const useFileType: () => {
    fileType: import('@windows98/toolkit').Maybe<string>;
    fileTypeOptions: {
        value: string;
        name: string;
    }[];
    setFileType: ReactEventHandler<HTMLSelectElement>;
    translations: {
        saveAs: string;
    };
};

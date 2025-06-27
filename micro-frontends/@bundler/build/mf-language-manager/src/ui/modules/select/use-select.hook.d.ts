import { ReactEventHandler } from 'react';
export default function useSelect(): {
    language: import('@windows98/toolkit').Maybe<string>;
    languageOptions: {
        value: string;
        name: string;
    }[];
    handleSelectChange: ReactEventHandler<HTMLSelectElement>;
};

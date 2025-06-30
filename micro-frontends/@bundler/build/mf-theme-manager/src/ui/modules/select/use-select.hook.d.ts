import { ReactEventHandler } from 'react';
export default function useSelect(): {
    theme: import('@windows98/toolkit').Maybe<string>;
    themeOptions: {
        value: string;
        name: string;
    }[];
    handleSelectChange: ReactEventHandler<HTMLSelectElement>;
};

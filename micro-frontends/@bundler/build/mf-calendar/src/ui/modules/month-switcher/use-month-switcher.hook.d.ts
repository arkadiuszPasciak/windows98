import { ReactEventHandler } from 'react';
export default function useMonthSwitcher(): {
    dictionary: {
        months: {
            value: number;
            name: string;
        }[];
    };
    handleSelectChange: ReactEventHandler<HTMLSelectElement>;
    month: number;
};

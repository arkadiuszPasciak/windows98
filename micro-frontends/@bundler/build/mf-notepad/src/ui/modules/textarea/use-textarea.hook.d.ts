import { ReactEventHandler } from 'react';
export declare const useTextarea: () => {
    placeholderText: string;
    text: string;
    onChange: ReactEventHandler<HTMLTextAreaElement>;
};

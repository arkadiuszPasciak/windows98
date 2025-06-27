import { PropsWithChildren } from 'react';
export interface ConfigProps extends PropsWithChildren {
    languages: Array<string>;
    onChangeLanguage: (language: string) => void;
}

import { PropsWithChildren } from 'react';
export interface ConfigProps extends PropsWithChildren {
    themes: Array<string>;
    onChangeTheme: (theme: string) => void;
}

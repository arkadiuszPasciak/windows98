import { FunctionComponent, PropsWithChildren } from 'react';
export interface ConfigProps {
    onCloseProgram: () => void;
}
export declare const ConfigContext: import('react').Context<ConfigProps>;
export declare const ConfigContextComponent: FunctionComponent<ConfigProps & PropsWithChildren>;

import { FunctionComponent, PropsWithChildren } from 'react';
import { Programs } from '../../domain/models';
export interface ConfigProps {
    onCloseProgram: () => void;
    onRunProgram: (program: string) => void;
    programs: Programs<string>;
}
export declare const ConfigContext: import('react').Context<ConfigProps>;
export declare const Config: FunctionComponent<PropsWithChildren & ConfigProps>;

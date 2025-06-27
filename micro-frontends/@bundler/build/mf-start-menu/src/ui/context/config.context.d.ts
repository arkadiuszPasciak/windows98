import { Maybe } from '@windows98/toolkit';
import { FunctionComponent, PropsWithChildren } from 'react';
import { MenuItems } from '../../domain/models';
export interface ConfigProps {
    onRunProgram: (program: string) => void;
    menuItems: Maybe<MenuItems>;
}
export declare const ConfigContext: import('react').Context<ConfigProps>;
export declare const Config: FunctionComponent<PropsWithChildren & ConfigProps>;

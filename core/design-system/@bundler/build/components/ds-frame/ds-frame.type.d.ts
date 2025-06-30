import { DSDefaultProps } from '../../types';
export interface DSFrameProps extends DSDefaultProps {
    title?: string;
    children: React.ReactNode;
    id: string;
}

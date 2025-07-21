import { DSDefaultProps } from '../../types';
export type DSButtonSize = "small" | "medium";
export interface DSButtonProps extends DSDefaultProps {
    size?: DSButtonSize;
    disabled?: boolean;
    id: string;
    onClick?: () => void;
    text: string;
    isTextVisible?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
}

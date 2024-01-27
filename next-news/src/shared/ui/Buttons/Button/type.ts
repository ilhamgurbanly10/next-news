export interface Props {
    href?: string;
    text: string | React.ReactNode;
    className?: string;
    isLink?: boolean;
    onClick?: () => void;
    type?: 'primary';
    buttonType?:  "button" | "submit" | "reset";
    disabled?: boolean;
}

export interface BtnType {
    primary: string;
    primaryDisabled: string;
}

export interface ModelReturnProps {
    types: BtnType;
}
export interface Props {
    href?: string;
    text: string | React.ReactNode;
    className?: string;
    isLink?: boolean;
    colorClassName?: string;
    colorClassNameOnHover?: string;
    onClick?: () => void;
    underline?: boolean;
}
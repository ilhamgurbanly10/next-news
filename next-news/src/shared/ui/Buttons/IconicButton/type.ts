export interface Props {
    href?: string;
    icon: React.ReactNode;
    className?: string;
    isLink?: boolean;
    colorClassName?: string;
    colorClassNameOnHover?: string;
    onClick?: () => void;
}
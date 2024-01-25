export interface Item {
    isLink?: boolean;
    onClick?: () => void;
    className?: string;
    label: string;
    href?: string;
    disabled?: boolean;
    children?: Item[];
    active?: boolean;
}

export interface Props {
    className?: string;
    items: Item[];
    showOnlyOne?: boolean;
}

export interface ModelReturnProps {
    isShown: (key: number | string) => boolean;
    show: (key: number | string, showOnlyOne: boolean) => void; 
    isInnerShown: (key: number | string) => boolean;
    showInner: (key: number | string, showOnlyOne: boolean) => void; 
}
export interface Parent {
    isLink?: boolean;
    onClick?: () => void;
    className?: string;
    label: string;
    href?: string;
    disabled?: boolean;
    children?: Parent[];
    active?: boolean;
}

export interface Props {
    className?: string;
    parent: Parent;
    dropdownClassName?: string;
    btnClassName?: string;
    dropdownBtnClassName?: string;
    innerDropdownClassName?: string;
}

export interface ModelReturnProps {
    showDropdown: boolean;
    setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
    shownInnerDropdowns: number[];
    setShownInnerDropdowns: React.Dispatch<React.SetStateAction<number[]>>;
}
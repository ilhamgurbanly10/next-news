export interface Path {
    href: string;
    label: string;
}

export interface ModelReturnProps {
    value: string | number;
    setValue: React.Dispatch<React.SetStateAction<string | number>>;
    onFinish: () => void;
}
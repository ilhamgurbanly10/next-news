export interface Props {
    className?: string;
    label?: string;
    id?: string;
    requiredSign?: boolean;
    error?: boolean;
    errorMes?: string;
    type?: string;
    placeholder?: string;
    value: string | number;
    setValue: React.Dispatch<React.SetStateAction<string | number>>;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
    disabled?: boolean;
    inputClassName?: string;
    allowClear?: boolean;
    onClear?: () => void;
    onChange?: (val: string | number) => void;
}
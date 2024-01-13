export interface Props {
    className?: string;
    show: boolean;
    children: React.ReactNode;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    contentClassName?: string;
}
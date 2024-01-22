export interface Props {
    className?: string;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}
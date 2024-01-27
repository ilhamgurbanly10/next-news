export interface Props {
    className?: string;
}

export interface ModelReturnProps {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string >>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    loading: boolean;
    disabled: boolean;
    onFinish: () => void;
    nameError: boolean;
    emailError: boolean;
    setNameWritten: React.Dispatch<React.SetStateAction<boolean>>;
    setEmailWritten: React.Dispatch<React.SetStateAction<boolean>>;
    emailInvalidError: boolean;
}

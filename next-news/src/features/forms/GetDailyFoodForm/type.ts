export interface Props {
    className?: string;
}

export interface ModelReturnProps {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string >>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    disabled: boolean;
    onFinish: () => Promise<boolean>;
    nameError: boolean;
    emailError: boolean;
    setNameWritten: React.Dispatch<React.SetStateAction<boolean>>;
    setEmailWritten: React.Dispatch<React.SetStateAction<boolean>>;
    emailInvalidError: boolean;
}

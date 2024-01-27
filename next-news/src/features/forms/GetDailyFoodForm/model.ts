import { useState, useMemo} from 'react';
import { ModelReturnProps } from './type';
import { useForm } from '@/shared/hooks';

const useModel = (): ModelReturnProps  => {

  const { isEmailValid } = useForm();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [nameWritten, setNameWritten] = useState<boolean>(false);
  const [emailWritten, setEmailWritten] = useState<boolean>(false);

  const nameError = useMemo<boolean>(() => {
    return name === "" && nameWritten ? true : false;
  }, [name, nameWritten])

  const emailError = useMemo<boolean>(() => {
    return email === "" && emailWritten ? true : false;
  }, [email, emailWritten])

  const emailInvalidError = useMemo<boolean>(() => {
    return email !== "" && !isEmailValid(email) ? true : false;
  }, [email])

    const disabled = useMemo<boolean>(() => {
    return nameError || emailError || emailInvalidError ? true : false;
  }, [nameError, emailError, emailInvalidError])

  const canSend = (): boolean => email === "" || name === "" ? false : true;

  const onFinish = (): void => {
    setNameWritten(true);
    setEmailWritten(true);
    if(canSend() && !disabled) { setLoading(true); console.log("sended"); }
  }

  return {
    name,
    setName,
    email,
    setEmail,
    disabled,
    loading,
    onFinish, 
    nameError,
    emailError,
    setNameWritten,
    setEmailWritten,
    emailInvalidError
  };

};

export default useModel;


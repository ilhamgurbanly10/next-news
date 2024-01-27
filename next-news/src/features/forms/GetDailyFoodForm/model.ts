import { useState, useMemo} from 'react';
import { ModelReturnProps } from './type';
import { useForm } from '@/shared/hooks';
import { useLoading } from "@/shared/hooks";
import { postGetDailyFood } from '@/shared/utils/post/email';

const useModel = (): ModelReturnProps  => {

  const { loading } = useLoading();
  const { isEmailValid } = useForm();

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
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

  const setDefault = (): void => {
      setName('');
      setEmail('');
      setNameWritten(false);
      setEmailWritten(false);
  }

  const onFinish = async (): Promise<boolean> => {
    setNameWritten(true);
    setEmailWritten(true);
    let success: boolean = false;
    if(canSend() && !disabled) { 
      loading.start();
      let data = await postGetDailyFood(name, email);
      loading.stop(); 
      setDefault();
      success = !data.error;
    }
    return success;
  }

  return {
    name,
    setName,
    email,
    setEmail,
    disabled,
    onFinish, 
    nameError,
    emailError,
    setNameWritten,
    setEmailWritten,
    emailInvalidError
  };

};

export default useModel;


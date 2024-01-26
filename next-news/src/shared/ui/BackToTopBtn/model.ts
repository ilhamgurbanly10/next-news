import { useState, useEffect} from 'react';
import { ModelReturnProps } from './type';

const useModel = (): ModelReturnProps  => {

  const [show, setShow] = useState<boolean>(false);

  const toggleButton = (): void => {
    setShow(Boolean(document?.documentElement?.scrollTop > 200))
  }

  useEffect(() => {
    document.addEventListener('scroll', toggleButton);
  }, [])

  return {
    show
  };

};

export default useModel;


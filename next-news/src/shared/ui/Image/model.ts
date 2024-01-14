import { useState} from 'react';
import { ModelReturnProps } from './type';

const useModel = (): ModelReturnProps  => {

  const [loaded, setLoaded] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const handleLoadingComplete = (): void => {
    setLoaded(false);
  }

  const handleError = (): void => {
    setError(true);
  }

  return {
    handleLoadingComplete,
    handleError,
    loaded, 
    error
  };

};

export default useModel;


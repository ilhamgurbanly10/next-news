import { useState} from 'react';
import { ModelReturnProps } from './type';

const useModel = (): ModelReturnProps  => {

  const [value, setValue] = useState<string | number>('');

  const onFinish = (): void => {
    
  }

  return {
    value,
    setValue, 
    onFinish
  };

};

export default useModel;


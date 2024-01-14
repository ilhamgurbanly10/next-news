import { useState} from 'react';
import { ModelReturnProps } from './type';

const useModel = (): ModelReturnProps  => {

  const [showOffcanvas, setShowOffcanvas] = useState<boolean>(true);

  return {
    showOffcanvas,
    setShowOffcanvas
  };

};

export default useModel;


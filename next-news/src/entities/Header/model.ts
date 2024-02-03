import { useState} from 'react';
import { ModelReturnProps } from './type';

const useModel = (): ModelReturnProps  => {

  const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return {
    showOffcanvas,
    setShowOffcanvas,
    showMenu,
    setShowMenu
  };

};

export default useModel;


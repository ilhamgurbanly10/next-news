import { useState} from 'react';
import { ModelReturnProps } from './type';

const useModel = (): ModelReturnProps  => {

  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [shownInnerDropdowns, setShownInnerDropdowns] = useState<number[]>([]);

  return {
    showDropdown,
    setShowDropdown,
    shownInnerDropdowns,
    setShownInnerDropdowns
  };

};

export default useModel;


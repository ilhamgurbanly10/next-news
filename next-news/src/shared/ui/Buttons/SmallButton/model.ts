import { useState, useEffect} from 'react';
import { ModelReturnProps, BtnType } from './type';

const useModel = (): ModelReturnProps  => {

  const types: BtnType =
    {
      primary: 'bg-primary-orange text-white cursor-pointer hover:bg-primary-blue',
      primaryDisabled: 'bg-primary-grey text-white cursor-not-allowed',
      secondary: 'bg-primary-blue text-white cursor-pointer hover:bg-primary-orange',
      secondaryDisabled: 'bg-primary-grey text-white cursor-not-allowed'
    }

  return {
    types
  };

};

export default useModel;


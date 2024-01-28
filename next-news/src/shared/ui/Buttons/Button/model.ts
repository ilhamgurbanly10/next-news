import { useState, useEffect} from 'react';
import { ModelReturnProps, BtnType } from './type';

const useModel = (): ModelReturnProps  => {

  const types: BtnType =
    {
      primary: 'bg-primary-blue text-white cursor-pointer hover:bg-primary-orange',
      primaryDisabled: 'bg-primary-grey text-white cursor-not-allowed',
      secondary: 'border border-primary-blue text-primary-blue bg-white cursor-pointer hover:bg-primary-blue hover:text-white',
      secondaryDisabled: 'bg-primary-grey text-white cursor-not-allowed'
    }

  return {
    types
  };

};

export default useModel;


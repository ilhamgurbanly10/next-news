import { useState, useMemo} from 'react';
import { Props } from './type';

export const Hook = (): Props  => {

  const isEmailValid = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  return {
    isEmailValid
  };

};



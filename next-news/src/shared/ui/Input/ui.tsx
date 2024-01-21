import React from 'react';
import { Props } from './type';

export const UI: React.FC<Props> = ({ className })  => {

  return (
    <input type="text" className={`input ${className ? className : ''}`} />
  );
};


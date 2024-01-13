import React from 'react';
import { Props } from './type';

export const UI: React.FC<Props> = ({ className, children })  => {

  return (
    <div className={`main-container mx-auto ${className ? className : ''}`}>
      {children}
    </div>
  );
};


import React from 'react';
import { Props } from './type';
import useModel from './model';
import Top from './Top';

export const UI: React.FC<Props> = ({  })  => {

  const { greeting } = useModel();
  
  return (
    <header className="header">
      <Top />
    </header>
  );
};


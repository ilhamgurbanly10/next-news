import React from 'react';
import { Props } from './type';
import useModel from './model';

export const UI: React.FC<Props> = ({ })  => {

  const { greeting } = useModel();
  
  return (
    <footer className="footer">
      
    </footer>
  );
};


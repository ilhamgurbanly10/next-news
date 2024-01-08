// components/Layout.tsx
import React from 'react';
import { Props } from './type';
import useModel from './model';

export const UI: React.FC<Props> = ({ children })  => {

  const { greeting } = useModel();
  
  return (
    <div className="layout">
      <header>
        <h1>Welcome to My Next.js App</h1>
        <p>{greeting}</p>
      </header>

      <main>{children}</main>

      <footer>Footer content here</footer>
    </div>
  );
};


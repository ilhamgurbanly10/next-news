import React from 'react';
import { Props } from './type';
import Header from '@/features/Header';
import Footer from '@/features/Footer';

export const UI: React.FC<Props> = ({ children })  => {
  
  return (
    <>
      <Header />
      <main className='main'>{children}</main>
      <Footer />
    </>
  );
};


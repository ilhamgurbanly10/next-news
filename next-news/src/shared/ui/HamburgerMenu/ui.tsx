import React from 'react';
import { Props } from './type';
import { Close } from '@/shared/icons';

export const UI: React.FC<Props> = ({ 
  className, 
  show,
  setShow,
  children
})  => {

  return (
    <div className={`hamburger-menu bg-overlay lg:hidden fixed h-screen w-screen transition-all top-0 duration-1000  ${className ? className : ''} ${show ? 'right-0' : '-right-full'}`}>

        <button type="button" className='absolute top-4 left-4' onClick={() => { setShow(false); }}>
          X
        </button>
        <div className={`bg-white absolute top-0 p-4 right-0 h-full w-9/12 ${show ? '' : ''}`}>
          {children}
        </div>

    </div>
  );
};


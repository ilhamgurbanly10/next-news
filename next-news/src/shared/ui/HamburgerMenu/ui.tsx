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
    <div onClick={() => { setShow(false); }} className={`hamburger-menu bg-overlay lg:hidden fixed h-screen w-screen transition-all top-0 duration-1000  ${className ? className : ''} ${show ? 'right-0' : '-right-full'}`}>

        <div onClick={(e) => { e?.stopPropagation(); }} className={`bg-white absolute top-0 p-4 right-0 h-full w-9/12 ${show ? '' : ''}`}>
        <button type="button" className={`absolute transition-all top-4 right-4 font-bold ${show ? 'rotate-0 delay-1000' : 'rotate-180'}`} onClick={() => { setShow(false); }}>
          <Close color='#18335' />
        </button>
          {children}
        </div>

    </div>
  );
};


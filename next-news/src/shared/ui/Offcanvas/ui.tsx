import React from 'react';
import { Props } from './type';

export const UI: React.FC<Props> = ({ show, className, children, setShow, contentClassName })  => {

  return (
    <div className={`offcanvas ${className ? className : ''}`}>
      <div onClick={() => { setShow(false); }} className={`offcanvas-overlay transition-all duration-500 z-40 bg-overlay fixed inset-0 ${show ? 'opacity-1 visible' : 'opacity-0 invisible'}`}></div>
      <div onClick={(e) => { e.stopPropagation(); }} className={`offcanvas-content w-10/12 md:w-96 transition-all duration-500 z-40 bg-overlay fixed top-0 bottom-0 bg-white p-10 ${show ? 'opacity-1 visible left-0' : 'opacity-0 invisible -left-100%'} ${contentClassName ? contentClassName : ''}`}>
        {children}
      </div>
    </div>
  );
};


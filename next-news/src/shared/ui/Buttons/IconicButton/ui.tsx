import React from 'react';
import { Props } from './type';
import Link from 'next/link';

export const UI: React.FC<Props> = ({ href, icon, className, isLink = true, colorClassName = "text-white", colorClassNameOnHover = "text-primary-orange", onClick })  => {

  return (
    <>
    {isLink ? 
      <Link href={href || '/'}>
        <span className={`iconic-btn text-primary-orange w-10 h-10 flex items-center justify-center border text-base font-medium transition-all cursor-pointer ${colorClassName} hover:${colorClassNameOnHover} ${className ? className : ''}`}>{icon}</span>
      </Link> 
      : 
      <button onClick={() => { if (onClick) onClick(); }} type="button" className={`iconic-btn text-primary-blue w-10 h-10 flex items-center justify-center text-base font-medium transition-all cursor-pointer ${colorClassName} hover:${colorClassNameOnHover} ${className ? className : ''}`}>{icon}</button> 
    }
    </>
    
  );
};


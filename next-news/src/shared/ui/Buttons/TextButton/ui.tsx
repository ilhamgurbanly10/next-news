import React from 'react';
import { Props } from './type';
import Link from 'next/link';

export const UI: React.FC<Props> = ({ href, text, className, isLink = true, colorClassName = "text-white", colorClassNameOnHover = "text-primary-orange", onClick })  => {

  return (
    <>
    {isLink ? 
      <Link href={href || '/'}>
        <span className={`text-btn text-sm font-medium transition-all cursor-pointer ${colorClassName} hover:${colorClassNameOnHover} ${className ? className : ''}`}>{text}</span>
      </Link> 
      : 
      <button onClick={() => { if (onClick) onClick(); }} type="button" className={`text-btn text-sm font-medium transition-all cursor-pointer ${colorClassName} hover:${colorClassNameOnHover} ${className ? className : ''}`}>{text}</button> 
    }
    </>
    
  );
};


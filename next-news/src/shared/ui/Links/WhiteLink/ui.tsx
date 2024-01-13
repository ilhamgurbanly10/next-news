import React from 'react';
import { Props } from './type';
import Link from 'next/link';

export const UI: React.FC<Props> = ({ href, text, className })  => {

  return (
    <Link href={href}>
      <span className={`text-white text-sm font-medium transition-all cursor-pointer hover:text-primary-orange ${className ? className : ''}`}>{text}</span>
    </Link>
  );
};


import React from 'react';
import { Props } from './type';
import { Loading } from '@/shared/icons';
import { useTranslation } from 'next-i18next';

export const UI: React.FC<Props> = ({ show, className, showText, textKey = 'loading' })  => {

  const { t } = useTranslation('common');

  return (
    <>
      {show && 
        <div className={`loader text-xl-2 text-primary-blue inline-flex items-center ${className ? className : ''}`}>
          <span className='animate-spin'><Loading /></span> {showText && <span className='ml-4 text-base'>{t(textKey)}</span>}
        </div>
      }
    </>
  );
};


import React from 'react';
import { Props } from './type';
import { Warning } from '@/shared/icons';
import { useTranslation } from 'next-i18next';

export const UI: React.FC<Props> = ({ show, className, showText, textKey = 'error' })  => {

  const { t } = useTranslation('common');

  return (
    <>
      {show && 
        <div className={`loader text-xl-2 text-error inline-flex items-center ${className ? className : ''}`}>
          <Warning /> {showText && <span className='ml-4 text-base'>{t(textKey)}</span>}
        </div>
      }
    </>
  );
};


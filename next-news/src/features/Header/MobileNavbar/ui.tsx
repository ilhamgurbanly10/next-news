import React from 'react';
import { useTranslation } from 'next-i18next'
import { Props } from './type';
import Menu from '@/shared/ui/Menu';
import { paths } from './data';

export const UI: React.FC<Props> = ({ className })  => {

  const { t } = useTranslation('common');

  return (
    <nav className={`mobile-navbar relative flex items-center ${className ? className : ''}`}>
      <Menu items={paths} className='mr-4 last:mr-0' showOnlyOne={true} />
    </nav>
  );
};


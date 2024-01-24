import React from 'react';
import { useTranslation } from 'next-i18next'
import { Props } from './type';
import Dropdown from '@/shared/ui/Dropdown';
import { paths } from './data';
import { Parent } from '@/shared/ui/Dropdown/type';

export const UI: React.FC<Props> = ({ className })  => {

  const { t } = useTranslation('common');

  return (
    <nav className={`header-offcanvas-content relative flex items-center ${className ? className : ''}`}>

      {paths?.map((item: Parent, i: number) => (
        <Dropdown className='mr-4 last:mr-0' key={i} parent={item} />
      ))}

    </nav>
  );
};


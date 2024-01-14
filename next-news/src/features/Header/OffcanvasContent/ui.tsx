import React from 'react';
import { useTranslation } from 'next-i18next'
import { Props } from './type';
import { Close } from '@/shared/icons';
import Image from '@/shared/ui/Image';
import Link from 'next/link';

export const UI: React.FC<Props> = ({ className, setShow  })  => {

  const { t } = useTranslation('common');

  return (
    <div className={`header-offcanvas-content relative ${className ? className : ''}`}>

      <button type="button" className="bg-primary-orange rounded-full text-center inline-flex justify-center items-center text-2xl w-12 h-12 absolute top-0 right-0 text-white transition-all hover:bg-primary-blue" onClick={() => { setShow(false); }}>
        <Close />
      </button>

      <div className='flex flex-col pt-16'>
        <Link href="/">
          <Image 
            className="brand" 
            width={171} 
            height={50} 
            alt={'brand'} 
            src="https://themegenix.net/html/zaira/assets/img/logo/logo.png" 
          />
        </Link>

        <p className='mt-4 text-gray-500 leading-7 w-11/12'>{t('offCanvasText')}</p>
        
      </div>

    </div>
  );
};


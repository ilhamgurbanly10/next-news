import React from 'react';
import { useTranslation } from 'next-i18next'
import WhiteLink from '@/shared/ui/Links/WhiteLink';
import { paths } from './data';
import { Path } from './type';
import { FacebookFilled, TwitterOutlined, InstagramOutlined, LinkedinFilled } from '@/shared/icons';

export const UI: React.FC = ({  })  => {

  const {t } = useTranslation('common');

  return (
    <div className="header-top bg-primary-blue w-full hidden lg:flex text-white py-2 px-5 items-center justify-between">

      <div className='flex items-center'>
        {paths?.map((path: Path, i) => (
          <WhiteLink key={i} href={path.href} text={t(path.label)} className="mr-6 last:mr-0"/>
        ))}
      </div>

      <div className='flex items-center'>
        <h6 className='text-base mr-4 font-medium'>{t('FOLLOWUS')}:</h6>
        <WhiteLink href={'/'} text={<FacebookFilled />} className="mr-4"/>
        <WhiteLink href={'/'} text={<TwitterOutlined />} className="mr-4"/>
        <WhiteLink href={'/'} text={<InstagramOutlined />} className="mr-4"/>
        <WhiteLink href={'/'} text={<LinkedinFilled />} className="mr-4"/>
      </div>

    </div>
  );
};


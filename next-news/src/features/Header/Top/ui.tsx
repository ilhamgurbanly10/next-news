import React from 'react';
import { useTranslation } from 'next-i18next'
import TextButton from '@/shared/ui/Buttons/TextButton';
import { paths } from './data';
import { Path } from './type';
import { FacebookFilled, TwitterOutlined, InstagramOutlined, LinkedinFilled } from '@/shared/icons';
import Container from '@/shared/ui/Container';

export const UI: React.FC = ({  })  => {

  const { t } = useTranslation('common');

  return (
    <div className="header-top bg-primary-blue w-full hidden lg:block text-white py-2 px-5">

      <Container className='flex items-center justify-between'>
        <div className='flex items-center'>
          {paths?.map((path: Path, i: number) => (
            <TextButton key={i} href={path.href} text={t(path.label)} className="mr-6 last:mr-0"/>
          ))}
        </div>

        <div className='flex items-center'>
          <h6 className='text-base mr-4 font-medium'>{t('FOLLOWUS')}:</h6>
          <TextButton href={'/'} text={<FacebookFilled />} className="mr-4"/>
          <TextButton href={'/'} text={<TwitterOutlined />} className="mr-4"/>
          <TextButton href={'/'} text={<InstagramOutlined />} className="mr-4"/>
          <TextButton href={'/'} text={<LinkedinFilled />}/>
        </div>
      </Container>

    </div>
  );
};


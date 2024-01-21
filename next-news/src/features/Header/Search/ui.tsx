import React from 'react';
import { useTranslation } from 'next-i18next'
import { FacebookFilled, TwitterOutlined, InstagramOutlined, LinkedinFilled } from '@/shared/icons';
import Input from '@/shared/ui/Input';

export const UI: React.FC = ({  })  => {

  const { t } = useTranslation('common');

  return (
    <div className="search">

      <form onSubmit={(e) => { e.preventDefault(); }}>
        <Input />
      </form>

    </div>
  );
};


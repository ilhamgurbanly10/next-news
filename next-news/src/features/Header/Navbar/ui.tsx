import React, { useEffect} from 'react';
import { useTranslation } from 'next-i18next'
import { Props } from './type';
import { Close, Marker, Phone, Envelope } from '@/shared/icons';
import Image from '@/shared/ui/Image';
import Link from 'next/link';
import useRecoil from '@/shared/state/useRecoil';
import Loader from '@/shared/ui/Loader';
import Error from '@/shared/ui/Error';
import TextButton from '@/shared/ui/Buttons/TextButton';
import Dropdown from '@/shared/ui/Dropdown';

export const UI: React.FC<Props> = ({ className })  => {

  const { t } = useTranslation('common');

  return (
    <nav className={`header-offcanvas-content relative ${className ? className : ''}`}>

      <Dropdown
        parent={
          { 
            isLink: true,
            onClick: () => {},
            className: '',
            label: 'Courses',
            href: "/aa",
            disabled: false,
            active: false,
            children: [
              {
                isLink: true,
                onClick: () => {},
                className: '',
                label: 'Courses',
                href: "/aa",
                disabled: false,
                children: [
                  {
                    isLink: true,
                    onClick: () => {},
                    className: '',
                    label: 'Courses',
                    href: "/aa",
                    disabled: false,
                  },
                  {
                    isLink: false,
                    onClick: () => {},
                    className: '',
                    label: 'Courses',
                    href: "/aa",
                    disabled: true,
                  }
                ]
              },
              {
                isLink: false,
                onClick: () => {},
                className: '',
                label: 'Courses',
                href: "/aa",
                disabled: false,
                children: [
                  {
                    isLink: true,
                    onClick: () => {},
                    className: '',
                    label: 'Courses',
                    href: "/aa",
                    disabled: false,
                  },
                  {
                    isLink: false,
                    onClick: () => {},
                    className: '',
                    label: 'Courses',
                    href: "/aa",
                    disabled: false,
                  }
                ]
              }
            ]
          }
        }
      />

    </nav>
  );
};


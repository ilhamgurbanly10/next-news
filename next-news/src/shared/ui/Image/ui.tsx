import React from 'react';
import { Props } from './type';
import Image from 'next/image';
import useModel from './model';
import { useTranslation } from 'next-i18next';
import { Warning, Loading } from '@/shared/icons';

export const UI: React.FC<Props> = ({ className, width = 300, height = 100, src = '/', alt = 'image', quality = 70, loading = "lazy", loadingText = true, errorText = true })  => {

  const { t } = useTranslation('common');

  const { handleLoadingComplete, handleError, loaded, error  } = useModel();

  return (
    <div className={`image relative ${className ? className : ''}`} style={{width: `${width}px`, height: `${height}px`}}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoadingComplete={handleLoadingComplete}
        onError={handleError}
        quality={quality}
        loading={loading}
      />
      {loaded && 
        <div className='absolute text-loading font-bold w-full h-full inset-0 bg-white flex items-center justify-center text-center'>
          <span className='animate-spin text-2xl'><Loading /></span> {loadingText && <span className='ml-2'>{t('loading')}</span>}
        </div>
      }
      {!loaded && error && 
        <div className='absolute text-error font-bold w-full h-full inset-0 bg-white flex items-center justify-center text-center'>
          <span className='text-2xl'><Warning /></span> { errorText && <span className='ml-2'>{t('errorOccurred')}</span>}
        </div>
      }
    </div>
  );
};


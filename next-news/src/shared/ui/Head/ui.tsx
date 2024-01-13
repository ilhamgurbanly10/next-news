import React from 'react';
import { Props } from './type';
import Head from 'next/head';

export const UI: React.FC<Props> = ({ title, metaTitle, metaDescription  })  => {
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
    </Head>
  );
};


import React, { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import constants from '@/helpers/constants';
import { getInitialLocale } from '../i18n/getInitialLocale';

const Index: FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace('/[lang]', `/${getInitialLocale()}`);
  });
  return (
    <Head>
      <meta name="author" content={constants.name} />
      <meta name="title" content={constants.shortName} />
    </Head>
  );
};

export default Index;

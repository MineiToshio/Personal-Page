import React, { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getInitialLocale } from '../i18n/getInitialLocale';

const Index: FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.replace('/[lang]', `/${getInitialLocale()}`);
  });
  return (
    <Head>
      <meta name="author" content="Toshio Minei" />
      <meta name="title" content="Toshio Minei" />
    </Head>
  );
};

export default Index;

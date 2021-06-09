import React, { FC, useEffect } from 'react';
import Head from 'next/head';
import useTranslation from '@/hooks/useTranslation';
import { BaseLayout as Layout } from '..';
import smoothScroll from '../../../helpers/smoothScroll';
import { ScrollUp } from '../../shared';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode | Array<React.ReactNode>;
  title?: string;
};

const MainLayout: FC<Props> = ({ children, title }) => {
  const { t } = useTranslation('Layout');

  useEffect(() => {
    smoothScroll();
  }, []);

  return (
    <Layout title={`${title ? `${title} | ` : ''}Toshio Minei`}>
      <Head>
        <meta name="description" content={t('description')} />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Header />

      <div id="content">
        {children}

        <Footer />
        <ScrollUp />
      </div>
    </Layout>
  );
};

export default MainLayout;

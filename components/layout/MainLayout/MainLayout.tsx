import React, { FC, useEffect, useMemo } from 'react';
import Head from 'next/head';
import useTranslation from '@/hooks/useTranslation';
import constants from '@/helpers/constants';
import { BaseLayout as Layout } from '..';
import { ScrollUp, Seo } from '../../shared';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode | Array<React.ReactNode>;
  title?: string;
  description?: string;
  featureImage?: string;
  url?: string;
};

const MainLayout: FC<Props> = ({
  children,
  title,
  description,
  featureImage = `${constants.url}/img/portfolio/12/1.png`,
  url,
}) => {
  const { t } = useTranslation('Layout');

  const realTitle = useMemo(() => `${title ? `${title} | ` : ''}${constants.shortName}`, [title]);

  return (
    <Layout title={realTitle}>
      <Seo
        title={realTitle}
        description={description ?? t('description')}
        image={featureImage}
        url={url}
      />
      <Head>
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

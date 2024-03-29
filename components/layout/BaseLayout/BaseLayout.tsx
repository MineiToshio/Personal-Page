import React, { FC } from 'react';
import Head from 'next/head';
import theme from '@/styles/theme';
import constants from '@/helpers/constants';
import type { AuthorizationType } from '../../shared';
import { Authorization } from '../../shared';

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
  title?: string;
  authorizationType?: AuthorizationType;
};

const AdminLayout: FC<Props> = ({ children, title = constants.name, authorizationType }) => (
  <Authorization type={authorizationType}>
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <meta name="robots" content="index,follow" />
      <meta name="author" content={constants.name} />
      <meta name="theme-color" content={theme.color.main} />
      <link rel="shortcut icon" href="/img/favicon/favicon52.png" type="image/x-icon" />
    </Head>
    {children}
  </Authorization>
);

export default AdminLayout;

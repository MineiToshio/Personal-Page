import React, { FC } from 'react';
import Router from 'next/router';
import useCurrentUser from '@/hooks/useCurrentUser';
import { Spinner } from '..';

export type AuthorizationType = 'only_auth' | 'only_no_auth';

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
  type?: AuthorizationType;
};

const Authorization: FC<Props> = ({ children, type }) => {
  const { currentUser, initializing } = useCurrentUser();

  if (type) {
    if (typeof window === 'undefined' || initializing) {
      return <Spinner />;
    }
    if (type === 'only_no_auth' && currentUser && currentUser.isAdmin) {
      Router.push('/admin');
      return <Spinner />;
    }
    if (type === 'only_auth' && (!currentUser || !currentUser.isAdmin)) {
      Router.push('/admin/login');
      return <Spinner />;
    }
  }
  return <>{children}</>;
};

export default Authorization;

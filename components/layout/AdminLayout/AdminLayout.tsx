import React, { FC } from 'react';
import useCurrentUser from '@/hooks/useCurrentUser';
import type { AuthorizationType } from '../../shared';
import { BaseLayout as Layout } from '..';
import Header from './Header';

type Props = {
  children: React.ReactNode | React.ReactNodeArray;
  title?: string;
  authorizationType?: AuthorizationType;
};

const AdminLayout: FC<Props> = ({
  children,
  title,
  authorizationType,
}) => {
  const { currentUser } = useCurrentUser();
  return (
    <Layout authorizationType={authorizationType} title={`${title ? `${title} | ` : ''}Toshio Minei Admin`}>
      <Header user={currentUser} />
      <div className="content">{children}</div>
      <style jsx>{`
        .content {
          padding: 50px;
        }
      `}</style>
    </Layout>
  );
};

export default AdminLayout;

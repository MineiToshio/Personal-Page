import React from 'react';
import theme from '@/styles/theme';
import { Login } from '@/components/shared';
import { BaseLayout as Layout } from '@/components/layout';
import type { NextPage } from 'next';

const LoginPage: NextPage = () => (
  <Layout authorizationType="only_no_auth" title="Login">
    <div className="container">
      <Login title="Toshio Minei Admin" />
    </div>
    <style jsx>{`
      .container {
        background: ${theme.color.main};
        height: 100vh;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </Layout>
);

export default LoginPage;

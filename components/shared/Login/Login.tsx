import React, { FC } from 'react';
import theme from '@/styles/theme';
import { AuthResponse, isAuthError } from '@/types/firebase';
import { loginGoogle } from '@/firebase/auth';
import { BrandButton } from '../../core';

type Props = {
  title?: string;
};

const Login: FC<Props> = ({ title }) => {
  const resolveSignIn = (res: AuthResponse) => {
    if (isAuthError(res)) {
      alert(res.error);
    }
  };

  const signinGoogle = async () => {
    const res = await loginGoogle();
    resolveSignIn(res);
  };

  return (
    <div className="container">
      {title && <h1 className="title">{title}</h1>}
      <BrandButton
        text="Inicia Sesión con Google"
        imgIcon="/svg/google.svg"
        onClick={signinGoogle}
        backgroundColor={theme.color.white}
        border="2px solid rgb(235,235,235)"
        textColor="#707070"
        width="100%"
      />
      <style jsx>{`
        .container {
          background: ${theme.color.white};
          border-radius: 5px;
          padding: 20px;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .title {
          font-family: ${theme.font.family.title};
          margin-top: 0;
          color: ${theme.color.secondary};
        }
      `}</style>
    </div>
  );
};

export default Login;

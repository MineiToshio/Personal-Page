import React from 'react';
import theme from '@/styles/theme';
import { Logo } from '@/components/shared';
import { Link } from '@/components/core';
import NavProfile from './NavProfile';
import type { User } from '@/types/firebase';

type Props = {
  user: User;
};

const Header = ({ user }: Props) => (
  <header className="header">
    <Link href="/admin">
      <Logo />
    </Link>
    {user && <NavProfile name={user.displayName} photoUrl={user.photoURL} />}
    <style jsx>{`
      .header {
        z-index: 10;
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        background: rgba(186, 193, 184, 0.8);
        font-family: ${theme.font.family.title};
        display: flex;
        background: ${theme.color.white};
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.07);
        border-bottom: 1px solid #f0f0f0;
        padding: 10px 30px;
        font-weight: bold;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 51px; // height of header without padding
      }

      @media only screen and (max-width: 425px) {
        .header {
          height: 41px;
        }
      }
    `}</style>
  </header>
);

export default Header;

import React, { FC } from 'react';
import { logout } from '@/firebase/auth';
import theme from '@/styles/theme';
import { Typography, Spacer, Icon } from '@/components/core';
import useBoolean from '@/hooks/useBoolean';
import { FloatingMenu } from '../../shared';
import UserPhoto from './UserPhoto';

type Props = {
  name: string;
  photoUrl?: string;
};

const NavProfile: FC<Props> = ({ name, photoUrl }) => {
  const [isMenuVisible, , setIsMenuVisibleFalse, setIsMenuVisible] = useBoolean();

  return (
    <button
      type="button"
      className="nav-profile"
      onClick={() => setIsMenuVisible(!isMenuVisible)}
      onMouseLeave={setIsMenuVisibleFalse}
    >
      <UserPhoto name={name} photoUrl={photoUrl} />
      <Spacer direction="horizontal" size={1} />
      <Typography text={name} fontWeight="bold" color="main" />
      <Spacer direction="horizontal" size={1} />
      <Icon icon="caretDown" />
      {isMenuVisible && (
        <div className="floating-menu">
          <FloatingMenu
            options={[
              {
                icon: 'signOut',
                text: 'Sign Out',
                onClick: logout,
              },
            ]}
            onHideMenu={setIsMenuVisibleFalse}
          />
        </div>
      )}

      <style jsx>{`
        button {
          border: none;
          background: transparent;
          font-size: 1rem;
        }

        .nav-profile {
          display: flex;
          min-width: 155px;
          cursor: pointer;
          text-decoration: none;
          color: ${theme.color.main};
          align-items: center;
          padding: 0 1.5em;
          position: relative;
        }

        .floating-menu {
          position: absolute;
          top: 34px;
          right: 1.5em;
          z-index: 1;
        }

        .name {
          margin: 0 0.75em;
          font-weight: 600;
        }

        @media only screen and (max-width: 767px) {
          .nav-profile {
            min-width: initial;
          }

          .name {
            display: none;
          }
        }
      `}</style>
    </button>
  );
};

export default NavProfile;

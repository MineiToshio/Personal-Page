import React, { FC } from 'react';
import theme from '@/styles/theme';
import { Icon } from '@/components/core';

export type Props = {
  name: string;
  photoUrl?: string;
};

const UserPhoto: FC<Props> = ({ name, photoUrl }) => (
  <>
    {photoUrl ? (
      <img src={photoUrl} className="photo" alt={name} title={name} />
    ) : (
      <div className="icon">
        <Icon icon="user" color="white" />
      </div>
    )}

    <style jsx>{`
      .photo {
        width: 35px;
        height: 35px;
        border-radius: 50%;
      }

      .icon {
        padding: 8px 12px;
        border-radius: 50%;
        background: ${theme.color.main};
        width: calc(38px - 24px);
        height: calc(38px - 16px);
        display: flex;
        align-items: center;
      }
    `}</style>
  </>
);

export default UserPhoto;

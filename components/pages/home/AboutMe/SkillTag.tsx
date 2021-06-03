import React from 'react';
import theme from '@/styles/theme';
import { Typography, Spacer } from '../../../core';

type Props = {
  icon: string;
  skill: string;
};

const SkillTag = ({ icon, skill }: Props) => (
  <div className="container">
    <div className="icon-container">
      <img className="icon" src={icon} alt={skill} title={skill} />
    </div>
    <Spacer direction="horizontal" size={1} />
    <Typography text={skill} color="white" />
    <style jsx>{`
      .container {
        background: ${theme.color.main};
        border: 1px solid ${theme.color.main};
        height: 30px;
        display: flex;
        align-items: center;
        border-radius: 3px;
        width: 100%;
      }
      .icon-container {
        background: ${theme.color.white};
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        border-radius: 3px 0 0 3px;
      }
      .icon {
        width: 25px;
      }
    `}</style>
  </div>
);

export default SkillTag;

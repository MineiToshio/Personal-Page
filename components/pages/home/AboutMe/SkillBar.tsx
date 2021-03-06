import React, { FC } from 'react';
import theme from '@/styles/theme';
import slug from '@/helpers/slug';
import useNearScreen from '@/hooks/useNearScreen';

type Props = {
  percent: string;
  skill: string;
};

const SkillBar: FC<Props> = ({ percent, skill }) => {
  const height = '30px';
  const [show, element] = useNearScreen<HTMLDivElement>();
  return (
    <div ref={element} className="skillbar" id={slug(skill)}>
      <span className="skillbar-title">{skill}</span>
      <p className="skillbar-bar" style={{ width: `${show ? percent : 0}%` }} />
      <span className="skill-bar-percent">{percent}%</span>

      <style jsx>{`
        .skillbar {
          position: relative;
          display: inline-block;
          margin: 5px 0;
          width: 100%;
          background: #eee;
          height: ${height};
          border-radius: 3px;
          width: 100%;
          text-align: left;
        }
        .skillbar-title {
          position: absolute;
          top: 0;
          left: 0;
          width: 80px;
          font-weight: bold;
          font-size: 13px;
          color: ${theme.color.white};
          background: #6adcfa;
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
          background: rgba(0, 0, 0, 0.1);
          padding: 0 15px;
          height: ${height};
          line-height: ${height};
          text-align: center;
        }
        .skillbar-bar {
          height: ${height};
          width: 0px;
          background: ${theme.color.main};
          border-radius: 3px;
          display: inline-block;
          margin: 0;
          transition: all 1.5s ease;
          will-change: width;
        }
        .skill-bar-percent {
          position: absolute;
          right: 10px;
          top: 0;
          font-size: 15px;
          height: ${height};
          line-height: ${height};
          color: ${theme.color.dark};
        }
      `}</style>
    </div>
  );
};

export default SkillBar;

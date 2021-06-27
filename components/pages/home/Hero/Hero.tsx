import React, { FC } from 'react';
import theme from '@/styles/theme';
import useTranslation from '@/hooks/useTranslation';
import ViewMore from './ViewMore';
import { SocialIcons, Particles } from '../../../shared';

type Props = {
  id: string;
};

const Hero: FC<Props> = ({ id }) => {
  const { t } = useTranslation('Hero');
  return (
    <div className="hero" id={id}>
      <Particles />
      <SocialIcons />
      <div className="content">
        <div className="title">
          {t('hello')}{' '}
          <div className="name">
            {t('im')} <span className="highlight">Toshio Minei</span>
          </div>
        </div>
        <div className="sub-title">{t('tagline')}</div>
      </div>
      <ViewMore title={t('viewMyWork')} />

      <style jsx>{`
        .hero {
          height: 100vh;
          color: ${theme.color.white};
          display: flex;
          justify-content: center;
          align-items: center;
          background: ${theme.color.main};
        }
        .hero :global(.social-icons) {
          position: absolute;
          top: 0;
          right: 0;
          margin: 20px;
        }
        .hero :global(.social-icons a) {
          color: ${theme.color.dark};
        }
        .content {
          text-align: center;
          z-index: 1;
        }
        .title {
          font-size: 30pt;
          text-align: center;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .highlight {
          color: ${theme.color.dark};
          font-weight: bold;
        }
        .name {
          margin-left: 10px;
        }
        .sub-title {
          font-size: 25pt;
          padding-top: 15px;
        }
        @media only screen and (max-width: 650px) {
          .title {
            font-size: 25pt;
          }
          .sub-title {
            font-size: 18pt;
          }
        }
        @media only screen and (max-width: 470px) {
          .title {
            flex-direction: column;
            font-size: 23pt;
          }
          .name {
            margin-left: 0;
          }
          .sub-title {
            font-size: 16pt;
            padding-top: 25px;
          }
          .hero :global(.social-icons) {
            right: auto;
            margin: 20px auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;

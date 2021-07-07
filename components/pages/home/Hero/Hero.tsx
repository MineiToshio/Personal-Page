import React, { FC } from 'react';
import theme from '@/styles/theme';
import useTranslation from '@/hooks/useTranslation';
import constants from '@/helpers/constants';
import { FlexContainer, Button, Typography, Spacer } from '@/components/core';
import { SocialIcons, Particles } from '@/components/shared';
import smoothScroll from '@/helpers/smoothScroll';
import ViewMore from './ViewMore';

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
        <Typography color="white">{t('hello')}</Typography>
        <Spacer direction="vertical" size={1} />
        <Typography
          variant="title"
          fontSize="hero"
          lineHeight="none"
          fontWeight="bold"
          color="black"
        >
          {constants.name}
        </Typography>
        <Spacer direction="vertical" size={2} />
        <Typography fontSize="heroSubtitle" lineHeight="small" fontWeight="bold" color="dark">
          {t('tagline')}
        </Typography>
        <Spacer direction="vertical" size={4} />
        <div className="description">
          <Typography lineHeight="small" color="dark">
            {t('description')}
          </Typography>
        </div>
        <Spacer direction="vertical" size={6} />
        <Button
          text="Contáctame"
          onClick={() => smoothScroll(constants.sectionIds.contact)}
          backgroundColor="white"
          bordered
        />
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
          z-index: 1;
          margin: 0 16px;
          text-align: left;
          width: 100%;
        }
        .highlight {
          color: ${theme.color.dark};
          font-weight: bold;
        }
        .description {
          max-width: 600px;
        }
        @media only screen and (max-width: 470px) {
          .hero :global(.social-icons) {
            right: auto;
            margin: 20px auto;
          }
        }
        @media only screen and ${theme.breakpoint.mdUp} {
          .content {
            margin: 0 10%;
          }
        }
        @media only screen and ${theme.breakpoint.lgUp} {
          .content {
            margin: 0 15%;
          }
        }
        @media only screen and ${theme.breakpoint.xlUp} {
          .content {
            margin: 0 20%;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;

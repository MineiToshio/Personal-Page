import React from 'react';
import useTranslation from '@/hooks/useTranslation';
import technologiesJson from '@/public/data/technologies.json';
import { Technology } from '@/types/types';
import { FlexContainer, Typography, Spacer } from '@/components/core';
import { SlideElement, SectionFooter, MainContainer } from '@/components/shared';
import constants from '@/helpers/constants';
import SkillTag from './SkillTag';

const technologies: Array<Technology> = Object.assign(technologiesJson);

const AboutMe = () => {
  const { t } = useTranslation('AboutMe');
  return (
    <div className="about-me">
      <MainContainer>
        <FlexContainer centered fullWidth>
          <div className="info">
            <div className="facts">
              <SlideElement animation="flip-in-x">
                <img src="/img/me.jpg" id="photo-me" alt={constants.name} className="photo" />
              </SlideElement>
              <Spacer direction="vertical" size={3} />
              <SlideElement animation="slide-up">
                <Typography lineHeight="small">{t('me')}</Typography>
              </SlideElement>
            </div>
            <div className="skills">
              <SlideElement animation="slide-in-right">
                <FlexContainer centered vertical>
                  <h2 className="skills-title">{t('technologiesIUsed')}</h2>
                  <div className="skill-list">
                    {technologies.map(technology => (
                      <SkillTag
                        icon={`img/technologies/${technology.icon}`}
                        skill={technology.name}
                        key={technology.name}
                      />
                    ))}
                  </div>
                </FlexContainer>
              </SlideElement>
            </div>
          </div>
        </FlexContainer>
      </MainContainer>
      <SectionFooter
        title={t('footerTitle')}
        url="https://www.linkedin.com/in/mineitoshio/"
        button={t('footerButton')}
      />

      <style jsx>{`
        .about-me {
          width: 100%;
        }
        .info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          text-align: center;
          max-width: 1200px;
          grid-gap: 24px;
          grid-template-areas: 'facts skills';
        }
        .facts {
          grid-area: facts;
        }
        .photo {
          max-width: 354px;
          width: 100%;
          border-radius: 20px;
        }
        .skills {
          grid-area: skills;
        }
        .skills-title {
          margin-top: 0;
        }
        .skill-list {
          display: grid;
          row-gap: 18px;
          width: 100%;
          justify-content: space-around;
          grid-template-columns: repeat(2, min-content);
        }
        @media only screen and (max-width: 1024px) {
          .info {
            grid-gap: 16px;
          }
        }
        @media only screen and (max-width: 600px) {
          .info {
            grid-template-columns: 1fr;
            grid-template-areas:
              'facts'
              'skills';
          }
          .skill-list {
            grid-gap: 10px;
          }
          .photo {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutMe;

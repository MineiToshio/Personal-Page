import React, { FC } from 'react';
import useTranslation from '@/hooks/useTranslation';
import technologiesJson from '@/public/data/technologies.json';
import { Technology } from '@/types/types';
import SkillTag from './SkillTag';
import { SlideElement, SectionFooter } from '../../../shared';

const technologies: Array<Technology> = Object.assign(technologiesJson);

const AboutMe: FC = () => {
  const { t } = useTranslation('AboutMe');
  return (
    <div className="about-me">
      <div className="info">
        <div className="facts">
          <SlideElement animation="flip-in-x">
            <img src="/img/me.jpg" width="250" id="photo-me" alt="Toshio Minei" />
          </SlideElement>
          <SlideElement animation="slide-in-left">
            <h2>{t('whoAmI')}</h2>
          </SlideElement>
          <SlideElement animation="slide-up">
            <p>{t('me')}</p>
          </SlideElement>
        </div>
        <div className="skills">
          <SlideElement animation="slide-in-right">
            <div className="skills-container">
              <h2>{t('technologiesIUsed')}</h2>
              <div className="skill-list">
                {technologies.map(technology => (
                  <SkillTag
                    icon={`img/technologies/${technology.icon}`}
                    skill={technology.name}
                    key={technology.name}
                  />
                ))}
              </div>
            </div>
          </SlideElement>
        </div>
      </div>
      <SectionFooter
        title={t('footerTitle')}
        url="https://www.linkedin.com/in/mineitoshio/"
        button={t('footerButton')}
      />

      <style jsx>{`
        .about-me {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          text-align: center;
          max-width: 1200px;
          grid-gap: 5px;
          grid-template-areas: 'facts skills';
        }
        .facts {
          grid-area: facts;
        }
        .skills {
          grid-area: skills;
        }
        .skills-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .skill-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 20px;
          width: 100%;
        }
        @media only screen and (max-width: 1024px) {
          .facts {
            padding: 20px;
          }
          .skills {
            padding: 20px;
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
        }
      `}</style>
    </div>
  );
};

export default AboutMe;

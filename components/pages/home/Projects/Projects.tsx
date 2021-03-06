import React, { FC } from 'react';
import useTranslation from '@/hooks/useTranslation';
import Portfolio from './Portfolio';
import { SectionFooter, MainContainer } from '../../../shared';

const Proyects: FC = () => {
  const { t } = useTranslation('Proyects');
  return (
    <div className="projects">
      <MainContainer>
        <Portfolio />
      </MainContainer>
      <SectionFooter title={t('title')} url="https://github.com/MineiToshio" button={t('button')} />

      <style jsx>{`
        .projects {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Proyects;

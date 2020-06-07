import React, { FC } from 'react';
import Portfolio from '../projects/Portfolio';
import SectionFooter from '../widgets/SectionFooter';
import useTranslation from '../../hooks/useTranslation';

const Proyects: FC = () => {
  const { t } = useTranslation('Proyects');
  return (
    <div className="projects">
      <Portfolio />
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

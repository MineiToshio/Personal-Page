import React, { FC, useState, useEffect, useRef } from 'react';
import Shuffle from 'shufflejs';
import { Project as ProjectType } from '@/types/types';
import useTranslation from '@/hooks/useTranslation';
import theme from '@/styles/theme';
import Project from './Project';
import ProjectModal from './ProjectModal';
import { SlideElement } from '../../../shared';

const deactivateFilters = () => {
  const filters: HTMLDivElement = document.querySelector('.filters') as HTMLDivElement;
  [...filters.children].map(element => element.classList.remove('active'));
};

const Portfolio: FC = () => {
  const { t, locale } = useTranslation('Portfolio');
  const [projects, setProjects] = useState<Array<ProjectType>>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalProject, setModalProject] = useState<ProjectType | null>(null);
  const [shuffle, setShuffle] = useState<Shuffle | null>(null);
  const refPortfolio = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require, import/no-dynamic-require
    const projectJson = require(`@/public/data/projects.${locale}.json`);
    setProjects(projectJson);
  }, [locale]);

  const onModalClick = (project: ProjectType) => {
    setModalVisible(true);
    setModalProject(project);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleShuffle = (e: React.MouseEvent<HTMLButtonElement>) => {
    deactivateFilters();
    e.currentTarget.classList.add('active');

    const filter = e?.currentTarget?.dataset?.filter?.split(' ');
    if (shuffle) {
      if (filter && filter[0] !== '') {
        shuffle.filter(filter);
      } else {
        shuffle.filter('');
      }
    }
  };

  useEffect(() => {
    if (refPortfolio.current) {
      setShuffle(
        new Shuffle(refPortfolio.current, {
          itemSelector: '.project',
          sizer: '.my-sizer-element',
          speed: 800,
        }),
      );
    }

    if (shuffle) {
      shuffle.resetItems();
    }

    return () => {
      if (shuffle) {
        shuffle.destroy();
        setShuffle(null);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refPortfolio, projects]);

  return (
    <div className="container">
      <SlideElement animation="pop-in">
        <div className="filters">
          <button type="button" data-filter="" onClick={handleShuffle} className="active">
            {t('all')}
          </button>
          <button type="button" data-filter="HTML" onClick={handleShuffle}>
            HTML
          </button>
          <button type="button" data-filter="jQuery" onClick={handleShuffle}>
            jQuery
          </button>
          <button type="button" data-filter="AngularJS Angular" onClick={handleShuffle}>
            Angular
          </button>
          <button type="button" data-filter="React" onClick={handleShuffle}>
            React
          </button>
          <button type="button" data-filter="C#" onClick={handleShuffle}>
            C#
          </button>
        </div>
      </SlideElement>
      <div className="portfolio" ref={refPortfolio}>
        {projects.map(project => (
          <Project
            key={project.id}
            handleClick={() => onModalClick(project)}
            tech={project.tech}
            name={project.name}
            id={project.id}
          />
        ))}
        <div className="column my-sizer-element" />
      </div>
      {modalProject && (
        <ProjectModal
          modalVisible={modalVisible}
          handleModalClose={handleModalClose}
          id={modalProject.id}
          name={modalProject.name}
          tech={modalProject.tech}
          description={modalProject.description}
          images={modalProject.images}
          live={modalProject.live}
          github={modalProject.github}
        />
      )}
      <style jsx>{`
        .container {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .filters {
          margin-bottom: 20px;
          text-align: center;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
        }

        .filters button {
          text-decoration: none;
          padding: 5px 10px;
          color: ${theme.color.main};
          font-weight: bold;
          margin: 5px;
          border: 2px solid ${theme.color.main};
          text-transform: uppercase;
          cursor: pointer;
          background: none;
          outline: none;
          font-size: 16px;
        }

        .filters button.active,
        .filters button:hover {
          background-color: ${theme.color.main};
          color: white;
        }

        .portfolio {
          position: relative;
          overflow: hidden;
          width: 85%;
          margin: auto;
        }

        .my-sizer-element {
          width: 8.33333%;
        }

        @media only screen and (max-width: 1200px) {
          .portfolio {
            width: 90%;
          }
        }

        @media only screen and (max-width: 750px) {
          .filters {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media only screen and (max-width: 400px) {
          .filters {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;

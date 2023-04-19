import React, { FC, useState, useEffect, useRef, Fragment } from 'react';
import Shuffle from 'shufflejs';
import { Project as ProjectType } from '@/types/types';
import useTranslation from '@/hooks/useTranslation';
import theme from '@/styles/theme';
import projects from '@/public/data/projects.json';
import Project from './Project';
import ProjectModal from './ProjectModal';
import { SlideElement } from '../../../shared';

const deactivateFilters = () => {
  const filters: HTMLDivElement = document.querySelector('.filters') as HTMLDivElement;
  [...filters.children].map(element => element.classList.remove('active'));
};

const Portfolio: FC = () => {
  const { t } = useTranslation('Portfolio');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalProject, setModalProject] = useState<ProjectType | null>(null);
  const [shuffle, setShuffle] = useState<Shuffle | null>(null);
  const refPortfolio = useRef<HTMLDivElement>(null);

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
          <button type="button" data-filter="React" onClick={handleShuffle}>
            React
          </button>
          <button type="button" data-filter="Firebase" onClick={handleShuffle}>
            Firebase
          </button>
          <button type="button" data-filter="AngularJS Angular" onClick={handleShuffle}>
            Angular
          </button>
          <button type="button" data-filter="jQuery" onClick={handleShuffle}>
            jQuery
          </button>
          <button type="button" data-filter="C#" onClick={handleShuffle}>
            C#
          </button>
        </div>
      </SlideElement>
      <div className="portfolio" ref={refPortfolio}>
        {projects.map(project => (
          <Fragment key={project.id}>
            {!project.disabled && (
              <Project
                handleClick={() => onModalClick(project)}
                tech={project.tech}
                name={project.name}
                id={project.id}
              />
            )}
          </Fragment>
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
          grid-template-columns: repeat(2, 1fr);
        }

        .filters button {
          text-decoration: none;
          padding: 5px 10px;
          color: ${theme.color.main};
          font-weight: bold;
          margin: 5px;
          border: 1px solid ${theme.color.main};
          text-transform: uppercase;
          cursor: pointer;
          background: none;
          outline: none;
          font-size: 16px;
          border-radius: 4px;
        }

        .filters button.active,
        .filters button:hover {
          background-color: ${theme.color.main};
          color: white;
        }

        .portfolio {
          position: relative;
          overflow: hidden;
          width: 100%;
          margin: auto;
        }

        .my-sizer-element {
          width: 8.33333%;
        }

        @media only screen and ${theme.breakpoint.smUp} {
          .filters {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media only screen and ${theme.breakpoint.mdUp} {
          .filters {
            grid-template-columns: repeat(6, 1fr);
          }
        }

        @media only screen and ${theme.breakpoint.xlUp} {
          .portfolio {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;

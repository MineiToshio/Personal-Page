import React, { useState, useEffect, useRef } from 'react';
import Project from './Project';
import ProjectModal from './ProjectModal';
import Shuffle from 'shufflejs';
import TrackVisibility from 'react-on-screen';

const Portfolio = ({ projects }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalProject, setModalProject] = useState({ "images": null })
  const [shuffle, setShuffle] = useState(null)
  const refPortfolio = useRef(null);

  const handleModalClick = (modalProject) => {
    setModalVisible(true)
    setModalProject(modalProject)
  }

  const handleModalClose = () => {
    setModalVisible(false)
  }

  const deactivateFilters = () => {
    const filters = document.querySelector('.filters')
    Array.from(filters.children).map((element) => {
      return element.classList.remove("active")
    })
  }

  const handleShuffle = (e) => {
    deactivateFilters();
    e.target.classList.add("active");

    const filter = e.target.dataset.filter.split(' ');
    filter[0] !== '' ? shuffle.filter(filter) : shuffle.filter('');
  }

  useEffect(() => {
    setShuffle(new Shuffle(refPortfolio.current, {
      itemSelector: '.project',
      sizer: '.my-sizer-element',
      speed: 800
    }));

    if(shuffle) {
      shuffle.resetItems();
    }

    return (() => {
      if (shuffle) {
        shuffle.destroy();
        setShuffle(null);
      }
    })
  }, [refPortfolio])

  return (
    <div className="container">
      <TrackVisibility once>
      {
        ({isVisible}) => (
          <div className={`filters ${isVisible ? "pop-in" : "invisible"}`}>
            <a data-filter="" onClick={handleShuffle} className="active">All</a>
            <a data-filter="HTML" onClick={handleShuffle}>HTML</a>
            <a data-filter="jQuery" onClick={handleShuffle}>jQuery</a>
            <a data-filter="AngularJS Angular" onClick={handleShuffle}>Angular</a>
            <a data-filter="React" onClick={handleShuffle}>React</a>
            <a data-filter="C#" onClick={handleShuffle}>C#</a>
          </div>
        )
      }
      </TrackVisibility>
      <div className="portafolio" ref={refPortfolio}>
        {
          projects.map(project => (
            <Project {...project} key={project.id} handleClick={() => handleModalClick(project)} tech={project.tech}/>
          ))
        }
        <div className="column my-sizer-element"></div>
      </div>
      <ProjectModal modalVisible={modalVisible} handleModalClose={handleModalClose} {...modalProject}/>
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

        .filters a {
          text-decoration: none;
          padding: 5px 10px;
          color: var(--green);
          font-weight: bold;
          margin: 5px;
          border: 2px solid var(--green);
          text-transform: uppercase;
          cursor: pointer;
        }

        .filters a.active, .filters a:hover {
          background-color: var(--green);
          color: white;
        }

        .portafolio {
          position: relative;
          overflow: hidden;
          width: 85%;
          margin: auto;
        }

        .my-sizer-element {
          width: 8.33333%;
        }

        @media only screen and (max-width: 1200px) {
          .portafolio {
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
  )
}

export default Portfolio
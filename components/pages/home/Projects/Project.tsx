import React, { FC } from 'react';
import theme from '@/styles/theme';
import { hexToRgba } from '@/styles/utils';
import arrayToString from '@/helpers/arrayToString';
import { Project as ProjectType } from '@/types/types';

type Props = Pick<ProjectType, 'name' | 'tech' | 'id'> & { handleClick: () => void };

const Project: FC<Props> = ({ name, tech, id, handleClick }) => (
  <button
    type="button"
    className="project"
    onClick={handleClick}
    data-groups={JSON.stringify(tech)}
  >
    <figure>
      <div className="aspect">
        <div className="inner">
          <img src={`/img/portfolio/thumbnails/${id}.png`} alt={name} />
        </div>
      </div>
    </figure>
    <div className="project-overlay">
      <div className="overlay-container">
        <h3>{name}</h3>
        <p>{arrayToString(tech)}</p>
      </div>
    </div>

    <style jsx>{`
      .aspect {
        position: relative;
        width: 100%;
        height: 0;
        overflow: hidden;
        padding-bottom: 75%;
      }

      .inner {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }

      * {
        box-sizing: border-box;
      }

      figure {
        margin: 0;
        padding: 0;
      }

      .project {
        position: relative;
        float: left;
        min-height: 1px;
        width: 25%;
        padding-left: 6px;
        padding-right: 6px;
        margin-top: 12px;
        cursor: pointer;
        border: none;
        background: none;
        outline: none;
      }

      .project:hover .project-overlay {
        opacity: 1;
      }

      .project:hover .project-overlay::before {
        transform: scale(1.001, 1.001);
      }

      .project:hover .project-overlay::after {
        transform: scale(1.001, 1.001);
      }

      .project:hover h3 {
        margin-bottom: 15px;
      }

      .project:hover h3:before {
        width: 50px;
      }

      .project:hover p {
        padding-top: 0;
      }

      .project-overlay {
        background: ${hexToRgba(theme.color.main, 0.8)};
        position: absolute;
        left: 4px;
        right: 4px;
        bottom: 0;
        top: 0;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-align: center;
        transition: opacity 0.4s ease-in-out;
        will-change: opacity;
        padding: 20px;
        border-radius: 5px;
      }

      .project-overlay:before {
        border-bottom: 1px dashed ${theme.color.white};
        border-top: 1px dashed ${theme.color.white};
        transform: scale(0, 1);
      }

      .project-overlay:after {
        border-left: 1px dashed ${theme.color.white};
        border-right: 1px dashed ${theme.color.white};
        transform: scale(1, 0);
      }

      .project-overlay:before,
      .project-overlay:after {
        content: '';
        height: calc(100% - 40px);
        left: 20px;
        position: absolute;
        top: 20px;
        transition: transform 0.5s ease 0s;
        will-change: transform;
        width: calc(100% - 40px);
        z-index: 1;
      }

      .overlay-container {
        width: 100%;
        padding: 10px;
      }

      h3 {
        color: ${theme.color.white};
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 50px;
        padding-bottom: 5px;
        position: relative;
        text-transform: uppercase;
        transition: all 0.5s ease 0s;
      }

      h3:before {
        background-color: ${theme.color.white};
        bottom: -8px;
        content: '';
        height: 1px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        width: 0px;
        transition: all 0.5s ease 0s;
      }

      p {
        color: ${theme.color.white};
        padding-top: 30px;
        transition: all 0.5s ease 0s;
      }

      @media only screen and (max-width: 1200px) {
        .project {
          width: 33.3%;
        }
      }

      @media only screen and (max-width: 800px) {
        .project {
          width: 50%;
        }
      }

      @media only screen and (max-width: 500px) {
        .project {
          width: 100%;
        }
      }
    `}</style>
  </button>
);

export default Project;

import React, { FC, useMemo } from 'react';
import theme from '@/styles/theme';
import useTranslation from '@/hooks/useTranslation';
import arrayToString from '@/helpers/arrayToString';
import { Project } from '@/types/types';
import { Modal, Slider } from '../../../shared';
import { Icon } from '../../../core';

type Props = Project & {
  modalVisible: boolean;
  handleModalClose: () => void;
};

const ProjectModal: FC<Props> = ({
  images,
  id,
  modalVisible,
  handleModalClose,
  name,
  tech,
  description,
  live,
  github,
}) => {
  const { t } = useTranslation('ProjectModal');

  const fullUrlImages: Array<string> = useMemo(
    () => images.map(image => `/img/portafolio/${id}/${image}`),
    [images, id],
  );

  return (
    <Modal visible={modalVisible} handleModalClose={handleModalClose}>
      <Slider images={fullUrlImages} />
      <div className="modal-info">
        <h3>{name}</h3>
        <h4>{arrayToString(tech)}</h4>
        <p>{description}</p>
        <div className="buttons">
          {live && (
            <a target="_blank" href={live} rel="noreferrer">
              <Icon icon="globeAmericas" /> {t('goToWeb')}
            </a>
          )}
          {github && (
            <a target="_blank" href={github} rel="noreferrer">
              <Icon icon="github" /> Github
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        img {
          width: 100%;
          border-radius: 5px 5px 0 0;
        }
        .modal-info {
          padding: 10px;
        }
        h3 {
          margin: 0;
          font-size: 19pt;
        }
        h4 {
          margin: 0;
          color: #7d7d7d;
          text-transform: uppercase;
        }
        .buttons {
          display: flex;
          font-size: 15px;
        }
        a {
          border-radius: 5px;
          padding: 8px 10px;
          background: ${theme.color.white};
          border: ${theme.color.main} solid 2px;
          cursor: pointer;
          margin-right: 10px;
          color: ${theme.color.main};
          text-decoration: none;
        }
        a:hover {
          color: ${theme.color.white};
          background: ${theme.color.main};
        }
        @media only screen and (max-width: 600px) {
          h3 {
            font-size: 16pt;
          }
          h4 {
            font-size: 11pt;
          }
          p {
            font-size: 10pt;
          }
          .buttons a {
            border: ${theme.color.main} solid 1px;
            padding: 6px 8px;
            font-size: 14px;
          }
        }
      `}</style>
    </Modal>
  );
};

export default ProjectModal;

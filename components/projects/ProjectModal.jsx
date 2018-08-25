import React from 'react';
import Modal from '../widgets/Modal';
import arrayToString from '../../helpers/arrayToString';

export default class ProjectModal extends React.Component {

  render() {
    const { modalVisible, handleModalClose, name, tech, images, description, id } = this.props;

    return (
      <Modal visible={modalVisible} handleModalClose={handleModalClose}>
        <img src={`../../static/img/portafolio/${id}/${images[0]}`} />
        <div className="modal-info">
          <h3>{name}</h3>
          <h4>{arrayToString(tech)}</h4>
          <p>{description}</p>
        </div>

        <style jsx>{`
          img {
            width: 100%;
            border-radius: 5px 5px 0 0;
          }

          .modal-info {
            padding: 10px;

            h3 {
              margin: 0;
              font-size: 19pt;
            }

            h4 {
              margin: 0;
              color: #7d7d7d;
              text-transform: uppercase;
            }
          }
        `}</style>
      </Modal>
    )
  }
}
import React from 'react';
import Modal from '../widgets/Modal';
import arrayToString from '../../helpers/arrayToString';
import Slider from '../widgets/Slider';

export default class ProjectModal extends React.Component {

  fullUrlImages = () => {
    const { images, id } = this.props;
    let urls = [];

    if (images)
      images.forEach(element => {
        urls.push(`../../static/img/portafolio/${id}/${element}`)
      });

    return urls;
  }

  render() {
    const { modalVisible, handleModalClose, name, tech, description } = this.props;

    return (
      <Modal visible={modalVisible} handleModalClose={handleModalClose}>
        <Slider images={this.fullUrlImages()}></Slider>
        {/* <img src={`../../static/img/portafolio/${id}/${images[0]}`} /> */}
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

          @media only screen and (max-width:600px) {
            h3 {
              font-size: 16pt;
            }
            h4 {
              font-size: 11pt;
            }
            p {
              font-size: 10pt;
            }
          }
        `}</style>
      </Modal>
    )
  }
}
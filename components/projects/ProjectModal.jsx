import React from 'react';
import Modal from '../widgets/Modal';
import arrayToString from '../../helpers/arrayToString';
import Slider from '../widgets/Slider';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

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
    const { modalVisible, handleModalClose, name, tech, description, live, github } = this.props;

    return (
      <Modal visible={modalVisible} handleModalClose={handleModalClose}>
        <Slider images={this.fullUrlImages()}></Slider>
        <div className="modal-info">
          <h3>{name}</h3>
          <h4>{arrayToString(tech)}</h4>
          <p>{description}</p>
          <div className="buttons" href={live}>
            {
              live &&
              <a target="_blank" href={live}>
                <FA icon={['fas', 'globe-americas']} /> Go to Website
              </a>
            }
            {
              github &&
              <a target="_blank" href={github}> 
                <FA icon={['fab', 'github']} /> Github
              </a>
            }
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
            background: #fff;
            border: var(--green) solid 2px;
            cursor: pointer;
            margin-right: 10px;
            color: var(--green);
            text-decoration: none; 
          }

          a:hover {
            color: #fff;
            background: var(--green);
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

            .buttons a {
              border: var(--green) solid 1px;
              padding: 6px 8px;
              font-size: 14px;
            }
          }
        `}</style>
      </Modal>
    )
  }
}
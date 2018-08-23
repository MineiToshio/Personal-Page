import React from 'react';

export default class Project extends React.Component {
  render() {

    const { name, tech, images, handleClick } = this.props;

    return (
      <a href="javascript:void(0)" className="project" onClick={handleClick} data-groups={JSON.stringify(tech)}>
        <figure>
          <div className="aspect">
            <div className="inner">
              <img src={`../../static/img/portafolio/${images[0]}`} alt={name}/>
            </div>
          </div>
        </figure>
        <div className="project-overlay">
          <div className="overlay-container">
            <h3>{name}</h3>
            <p>{tech}</p>
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
            padding-left: 4px;
            padding-right: 4px;
            margin-top: 8px;

            &:hover .project-overlay {
              opacity: 1;

              &::before {
                transform: scale(1.001, 1.001);
              }

              &::after {
                transform: scale(1.001, 1.001);
              }

              h3 {
                margin-bottom: 15px;
                &:before {
                  width: 50px;
                }
              }

              p {
                padding-top: 0;
              }
            }
          }

          .project-overlay {
            background: var(--green-alpha);
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
            transition: opacity .4s ease-in-out;
            will-change: opacity;
            padding: 20px;
            border-radius: 5px;

            &:before {
              border-bottom: 1px dashed #fff;
              border-top: 1px dashed #fff;
              transform: scale(0, 1);
            }

            &:after {
              border-left: 1px dashed #fff;
              border-right: 1px dashed #fff;
              transform: scale(1, 0);
            }

            &:before, &:after {
              content: "";
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
            }

            h3 {
              color: #fff;
              font-size: 20px;
              font-weight: bold;
              margin-bottom: 50px;
              padding-bottom: 5px;
              position: relative;
              text-transform: uppercase;
              transition: all 0.5s ease 0s;

              &:before {
                background-color: #fff;
                bottom: -8px;
                content: "";
                height: 1px;
                left: 50%;
                position: absolute;
                transform: translateX(-50%);
                width: 0px;
                transition: all 0.5s ease 0s;
              }
            }

            p {
              color: #fff;
              padding-top: 30px;
              transition: all 0.5s ease 0s;
            }
          }
        `}</style>
      </a>
    )
  }
}
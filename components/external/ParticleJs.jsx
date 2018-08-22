import React from 'react';

export default class ParticleJs extends React.Component {

  componentDidMount() {
    require('particles.js');
    particlesJS.load('particles-js', "../../static/data/particles.json");
  }

  render() {
    return (
      <div id="particles-js">

        <style jsx>{`
          canvas {
            display: block;
          }

          #particles-js {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: auto;
          }
        `}</style>
      </div>
    )
  }
}
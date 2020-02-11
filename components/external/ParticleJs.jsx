import React, { useEffect } from 'react';

const ParticleJs = () => {
  useEffect(() => {
    require('particles.js');
    particlesJS.load('particles-js', "../../static/data/particles.json");
  }, [])

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

export default ParticleJs
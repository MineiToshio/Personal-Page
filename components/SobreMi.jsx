import React from 'react';
import SkillBar from '../components/skills/SkillBar';

export default class SobreMi extends React.Component {
  render() {
    return (
      <div className="info">
        <div>
          <img src="../static/img/me.jpg" width="250" />
          <h2>¿Quién soy?</h2>
          <p>Soy Toshio Minei, fullstack web developer, emprendedor y blogger. Me apasiona la tecnología y me encanta aprender nuevas cosas. </p>

        </div>
        <div>
          <SkillBar skill="HTML" percent="90" />
          <SkillBar skill="CSS" percent="80" />
          <SkillBar skill="JavaScript" percent="90" />
          <SkillBar skill="React" percent="70" />
          <SkillBar skill="AngularJS" percent="60" />
          <SkillBar skill="C#" percent="80" />
          <SkillBar skill="Mongo DB" percent="60" />
          <SkillBar skill="MySQL" percent="80" />
        </div>
        <style jsx>{`
          .info {
            display: grid;
            grid-template-columns: 1fr 1fr;
            text-align: center;
            max-width: 1200px;

            div {
              padding: 5px;
            }
          }
        `}</style>
      </div>
    )
  }
}
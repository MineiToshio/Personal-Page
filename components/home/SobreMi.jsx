import React from 'react';
import SkillBar from '../skills/SkillBar';
import SectionFooter from '../widgets/SectionFooter';

export default () => {
  return (
    <div className="sobre-mi">
      <div className="info">
        <div className="datos">
          <img src="../static/img/me.jpg" width="250" id="photo-me" alt="Toshio Minei" />
          <h2>¿Quién soy?</h2>
          <p>Soy Toshio Minei, fullstack web developer, emprendedor y blogger. Me apasiona la tecnología y me encanta aprender nuevas cosas. </p>
        </div>
        <div className="skills">
          <SkillBar skill="HTML" percent="90" />
          <SkillBar skill="CSS" percent="80" />
          <SkillBar skill="JavaScript" percent="90" />
          <SkillBar skill="jQuery" percent="80" />
          <SkillBar skill="React" percent="70" />
          <SkillBar skill="AngularJS" percent="60" />
          <SkillBar skill="C#" percent="80" />
          <SkillBar skill="SQL Server" percent="80" />
          <SkillBar skill="MySQL" percent="80" />
          <SkillBar skill="Mongo DB" percent="60" />
        </div>
      </div>
      <SectionFooter 
        title="¿quieres conocer más de mi?" 
        url="https://www.linkedin.com/in/mineitoshio/" 
        button="Visita mi LinkedIn" />

      <style jsx>{`
        .sobre-mi {
          width:100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          text-align: center;
          max-width: 1200px;
          grid-gap: 5px;
          grid-template-areas: "datos skills";

          .datos {
            grid-area: datos;
          }

          .skills {
            grid-area: skills;
          }
        }
      `}</style>
    </div>
  )
}
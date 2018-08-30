import React from 'react';
import SkillBar from '../skills/SkillBar';
import SectionFooter from '../widgets/SectionFooter';
import TrackVisibility from 'react-on-screen';

export default () => {
  return (
    <div className="sobre-mi">
      <div className="info">
        <div className="datos">
          <TrackVisibility once>
          {
            ({ isVisible }) => <img src="../static/img/me.jpg" className={isVisible ? "flip-in-x" : "invisible"} width="250" id="photo-me" alt="Toshio Minei" />
          }
          </TrackVisibility>
          <TrackVisibility once>
          {
            ({ isVisible }) => <h2 className={isVisible ? "slide-in-left" : "invisible"}>¿Quién soy?</h2>
          }
          </TrackVisibility>
          <TrackVisibility once>
          {
            ({ isVisible }) => <p className={isVisible ? "slide-up" : "invisible"}>Soy Toshio Minei, fullstack web developer, emprendedor y blogger. Me apasiona la tecnología y me encanta aprender nuevas cosas. </p>
          }
          </TrackVisibility>
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
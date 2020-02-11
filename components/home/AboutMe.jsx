import React from 'react';
import SkillBar from '../skills/SkillBar';
import SectionFooter from '../widgets/SectionFooter';
import TrackVisibility from 'react-on-screen';

const AboutMe = () => {
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
            ({ isVisible }) => <h2 className={isVisible ? "slide-in-left" : "invisible"}>Who am I?</h2>
          }
          </TrackVisibility>
          <TrackVisibility once>
          {
              ({ isVisible }) => <p className={isVisible ? "slide-up" : "invisible"}>I'm Toshio Minei, frontend developer, entrepreneur and blogger. I love technology and I'm passionate about learning new things. </p>
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
          <SkillBar skill="Firebase" percent="60" />
        </div>
      </div>
      <SectionFooter 
        title="Do you want to know more about me?" 
        url="https://www.linkedin.com/in/mineitoshio/" 
        button="Visit my LinkedIn" />

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
        }

        .datos {
          grid-area: datos;
        }

        .skills {
          grid-area: skills;
        }

        @media only screen and (max-width: 1024px) {
          .datos {
            padding: 20px;
          }

          .skills {
            padding: 20px;
          }
        }

        @media only screen and (max-width: 600px) {
          .info {
            grid-template-columns: 1fr;
            grid-template-areas: "datos"
                                "skills";
          }
        }
      `}</style>
    </div>
  )
}

export default AboutMe
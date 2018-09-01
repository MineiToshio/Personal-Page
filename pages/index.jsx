import React from 'react';
import Layout from '../components/layout/Layout';
import Portada from '../components/home/Portada';
import Section from '../components/widgets/Section';
import ContactForm from '../components/contact/ContactForm';
import SobreMi from '../components/home/SobreMi';
import projectsData from '../static/data/projects.json';
import Parallax from '../components/widgets/Parallax';
import Projects from '../components/home/Proyects';

export default class extends React.Component {
  render () {
    return (
      <div>
        <Portada />
        <Layout title='Toshio Minei'>
          <Section id="sobre-mi" title="Sobre Mi" subtitle="Soy un fullstack web developer">
            <SobreMi />
          </Section>

          <Parallax 
            quote="la mejor forma de predecir el futuro es implementarlo" 
            author="David Heinemeier - Creador de Ruby on Rails"
            image="../static/img/parallax/parallax1.jpg"/>

          <Section id="portafolio" title="Portafolio" subtitle="Conoce alguno de los proyectos en los que he trabajado">
            <Projects projects={projectsData} />
          </Section>

          <Parallax 
            quote="Una máquina puede hacer el trabajo de cincuenta hombres ordinarios. Ninguna máquina puede hacer el trabajo de un hombre extraordinario."
            author="Elbert Hubbard - Escritor"
            image="../static/img/parallax/parallax2.jpg" />

          <Section id="contacto" title="Contacto" subtitle="¿Tienes una idea de proyecto? ¡Trabajemos juntos!">
            <ContactForm />
          </Section>
        </Layout>

        <style jsx global>{`
          .invisible {
            visibility: hidden;
          }

          .slide-up {
            animation: slideUp .75s ease both; 
          }
          .slide-down {
            animation: slideDown .75s ease both; 
          }
          .slide-in-left {
            animation: slideInLeft .75s ease both; 
          }
          .slide-in-right {
            animation: slideInRight .75s ease both; 
          }
          .flip-in-x {
            animation: flipInX .75s ease both; 
          }
          .pop-in {
            animation: popIn 1s both; 
          }
          
          @keyframes flipInX {
            from {
              transform: perspective(400px) rotateY(90deg);
              animation-timing-function: ease-in;
              opacity: 0; 
            }
            40% {
              transform: perspective(400px) rotateY(-20deg);
              animation-timing-function: ease-in; 
            }
            60% {
              transform: perspective(400px) rotateY(10deg);
              opacity: 1; 
            }
            80% {
              transform: perspective(400px) rotateY(5deg); 
            }
            to {
              transform: perspective(400px);
              opacity: 1; 
            } 
          }
          @keyframes popDown {
            0% {
              transform: translateY(-100px); 
            } 
          }
          @keyframes slideUp {
            0% {
              transform: translateY(300px); 
            }
            100% {
              opacity: 1;
              transform: translateY(0); 
            } 
          }
          @keyframes slideDown {
            0% {
              transform: translateY(-300px); 
            }
            100% {
              opacity: 1;
              transform: translateY(0); 
            }
          }
          @keyframes slideInLeft {
            0% {
              opacity: 0;
              transform: translateX(-300px); 
            }
            100% {
              opacity: 1;
              transform: translateX(0); 
            } 
          }
          @keyframes slideInRight {
            0% {
              opacity: 0;
              transform: translateX(300px); 
            }
            100% {
              opacity: 1;
              transform: translateX(0); 
            }
          }
          @keyframes toBottomFromTop {
            49% {
              transform: translateY(100%); 
            }
            50% {
              opacity: 0;
              transform: translateY(-100%); 
            }
            51% {
              opacity: 1; 
            }
          }
          @keyframes popIn {
            0% {
              transform: scale(0); 
            }
            60% {
              opacity: 1;
              transform: scale(1.05); 
            }
            80% {
              transform: scale(0.95); 
            }
            100% {
              transform: scale(1);
              opacity: 1; 
            } 
          }
        `}</style>
      </div> 
    )
  }
}
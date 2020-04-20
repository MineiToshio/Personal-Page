import React from 'react';
import { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Section from '../components/widgets/Section';
import ContactForm from '../components/contact/ContactForm';
import AboutMe from '../components/home/AboutMe';
import projectsData from '../public/data/projects.json';
import Parallax from '../components/widgets/Parallax';
import Projects from '../components/home/Proyects';

const Index: NextPage = () => {
  return (
    <div>
      <Hero id="portada"/>
      <Layout title='Toshio Minei'>
        <Section id="sobre-mi" title="About Me" subtitle="I'm a frontend developer">
          <AboutMe />
        </Section>

        <Parallax 
          quote="The best way to predict the future is to implement it" 
          author="David Heinemeier - Creator of Ruby on Rails"
          image="/img/parallax/parallax1.jpg"/>

        <Section id="portafolio" title="Portfolio" subtitle="View some of the projects I've worked on">
          <Projects projects={projectsData} />
        </Section>

        <Parallax 
          quote="One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man."
          author="Elbert Hubbard - Writer"
          image="/img/parallax/parallax2.jpg" />

        <Section id="contacto" title="Contact" subtitle="Do you have a project idea? Let's work together!">
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
            transform: translateX(-100%); 
          }
          100% {
            opacity: 1;
            transform: translateX(0); 
          } 
        }
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(-100%); 
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

export default Index
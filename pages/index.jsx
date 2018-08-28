import React from 'react';
import Layout from '../components/layout/Layout';
import Portada from '../components/home/Portada';
import Section from '../components/widgets/Section';
import ContactForm from '../components/contact/ContactForm';
import SobreMi from '../components/home/SobreMi';
import Portfolio from '../components/projects/Portfolio';
import projectsData from '../static/data/projects.json';


export default class extends React.Component {
  render () {
    return (
      <div>
        <Portada />
        <Layout title='Toshio Minei'>
          <Section id="sobre-mi" title="Sobre Mi" subtitle="Soy un fullstack web developer">
            <SobreMi />
          </Section>

          <Section title="Portafolio" subtitle="Conoce alguno de los proyectos en los que he trabajado">
            <Portfolio projects={projectsData} />
          </Section>

          <Section title="Contacto" subtitle="¿Tienes una idea de proyecto? ¡Trabajemos juntos!">
            <ContactForm />
          </Section>
        </Layout>

        <style jsx>{`
        `}</style>
      </div> 
    )
  }
}
import React from 'react';
import Portfolio from '../projects/Portfolio';
import SectionFooter from '../widgets/SectionFooter';

const Proyects = ({ projects }) => {
  return (
    <div className="projects">
      <Portfolio projects={projects} />
      <SectionFooter 
        title="Do you want to see more projects?"
        url="https://github.com/MineiToshio"
        button="Visit my Github" />

      <style jsx>{`
        .projects {
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default Proyects
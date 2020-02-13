import React from 'react';
import Portfolio from '../projects/Portfolio';
import SectionFooter from '../widgets/SectionFooter';
import PropTypes from 'prop-types'

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

Proyects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired, 
    tech: PropTypes.arrayOf(PropTypes.string).isRequired, 
    id: PropTypes.string.isRequired
  })).isRequired,
}

export default Proyects
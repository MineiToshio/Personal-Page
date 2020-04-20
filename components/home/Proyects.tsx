import React, { FC } from 'react';
import Portfolio from '../projects/Portfolio';
import SectionFooter from '../widgets/SectionFooter';
import { Project } from '../../types/types';

type Props = {
  projects: Array<Project>
}

const Proyects: FC<Props> = ({ projects }) => {
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
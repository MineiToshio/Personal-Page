import React from 'react';
import Project from './Project';
import ProjectModal from './ProjectModal';

export default class Portfolio extends React.Component {

  state = {
    modalVisible: false
  }

  handleModalClick = (modalProject) => {
    this.setState({
      modalVisible: true,
      modalProject
    })
  }

  handleModalClose = () => {
    this.setState({
      modalVisible: false
    })
  }

  render() {

    const { projects } = this.props;
    const { modalVisible, modalProject } = this.state;

    return (
      <div className="portafolio">

        {
          projects.map(project => (
            <Project {...project} key={project.id} handleClick={() => this.handleModalClick(project)}/>
          ))
        }

        <ProjectModal modalVisible={modalVisible} handleModalClose={this.handleModalClose} {...modalProject}/>

        <style jsx>{`
          .portafolio {
            display: grid;
            grid-template-columns: repeat(4, minmax(100px, 293px));
            justify-content: center;
            grid-gap: 28px;
          }
        `}</style>
      </div>
    )
  }
}
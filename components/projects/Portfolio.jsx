import React from 'react';
import Project from './Project';
import ProjectModal from './ProjectModal';
import Shuffle from 'shufflejs';

export default class Portfolio extends React.Component {

  state = {
    modalVisible: false,
    modalProject: {
      "images": null
    }
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

  deactivateFilters = () => {
    const filters = document.querySelector('.filters')
    Array.from(filters.children).map((element) => {
      return element.classList.remove("active")
    })
  }

  handleShuffle = (e) => {
    this.deactivateFilters();
    e.target.classList.add("active");

    const filter = e.target.dataset.filter;
    this.shuffle.filter(filter);
  }

  componentDidMount() {
    this.shuffle = new Shuffle(this.element, {
      itemSelector: '.project',
      sizer: '.my-sizer-element',
      speed: 800
    });
  }

  componentWillUnmount() {
    this.shuffle.destroy();
    this.shuffle = null;
  }

  componentDidUpdate() {
    this.shuffle.resetItems();
  }

  render() {

    const { projects } = this.props;
    const { modalVisible, modalProject } = this.state;

    return (
      <div className="container">
        <div className="filters">
          <a href="javascript:void(0)" data-filter="" onClick={this.handleShuffle} className="active">Todos</a>
          <a href="javascript:void(0)" data-filter="HTML" onClick={this.handleShuffle}>HTML</a>
          <a href="javascript:void(0)" data-filter="jQuery" onClick={this.handleShuffle}>jQuery</a>
          <a href="javascript:void(0)" data-filter="AngularJS" onClick={this.handleShuffle}>AngularJS</a>
          <a href="javascript:void(0)" data-filter="React" onClick={this.handleShuffle}>React</a>
          <a href="javascript:void(0)" data-filter="C#" onClick={this.handleShuffle}>C#</a>
          <a href="javascript:void(0)" data-filter="SQL Server" onClick={this.handleShuffle}>SQL Server</a>
        </div>
        <div className="portafolio" ref={element => this.element = element}>
          
          {
            projects.map(project => (
              <Project {...project} key={project.id} handleClick={() => this.handleModalClick(project)} tech={project.tech}/>
            ))
          }
          <div className="column my-sizer-element"></div>
          <ProjectModal modalVisible={modalVisible} handleModalClose={this.handleModalClose} {...modalProject}/>
        </div>
        <style jsx>{`
          .container {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          .filters {
            margin-bottom: 20px;

            a {
              text-decoration: none;
              padding: 5px 10px;
              color: var(--green);
              font-weight: bold;
              margin: 5px;
              border: 2px solid var(--green);
              text-transform: uppercase;
              
              &.active, &:hover {
                background-color: var(--green);
                color: white;
              }
            }
          }

          .portafolio {
            position: relative;
            overflow: hidden;
            width: 85%;
            margin: auto;
          }

          .my-sizer-element {
            width: 8.33333%;
          }
        `}</style>
      </div>
    )
  }
}
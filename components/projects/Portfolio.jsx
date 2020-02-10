import React from 'react';
import Project from './Project';
import ProjectModal from './ProjectModal';
import Shuffle from 'shufflejs';
import TrackVisibility from 'react-on-screen';

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

    const filter = e.target.dataset.filter.split(' ');

    filter[0] !== '' ? this.shuffle.filter(filter) : this.shuffle.filter('');
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
        <TrackVisibility once>
        {
          ({isVisible}) => (
            <div className={`filters ${isVisible ? "pop-in" : "invisible"}`}>
              <a data-filter="" onClick={this.handleShuffle} className="active">All</a>
              <a data-filter="HTML" onClick={this.handleShuffle}>HTML</a>
              <a data-filter="jQuery" onClick={this.handleShuffle}>jQuery</a>
              <a data-filter="AngularJS Angular" onClick={this.handleShuffle}>Angular</a>
              <a data-filter="React" onClick={this.handleShuffle}>React</a>
              <a data-filter="C#" onClick={this.handleShuffle}>C#</a>
            </div>
          )
        }
        </TrackVisibility>
        <div className="portafolio" ref={element => this.element = element}>
          {
            projects.map(project => (
              <Project {...project} key={project.id} handleClick={() => this.handleModalClick(project)} tech={project.tech}/>
            ))
          }
          <div className="column my-sizer-element"></div>
        </div>
        <ProjectModal modalVisible={modalVisible} handleModalClose={this.handleModalClose} {...modalProject}/>
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
            text-align: center;
            display: grid;
            grid-template-columns: repeat(6, 1fr);

            a {
              text-decoration: none;
              padding: 5px 10px;
              color: var(--green);
              font-weight: bold;
              margin: 5px;
              border: 2px solid var(--green);
              text-transform: uppercase;
              cursor: pointer;
              
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

          @media only screen and (max-width: 1200px) {
            .portafolio {
              width: 90%;
            }
          }

          @media only screen and (max-width: 750px) {
            .filters {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media only screen and (max-width: 400px) {
            .filters {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        `}</style>
      </div>
    )
  }
}
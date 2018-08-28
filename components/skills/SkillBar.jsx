import React from 'react';
import inViewport from '../../helpers/inViewport';
import slug from '../../helpers/slug';
import EventListener, { withOptions } from "react-event-listener";

export default class SkillBar extends React.Component {
  state = {
    handleScroll: true
  }

  handleScroll = () => {
    if(this.state.handleScroll) {
      const { percent, skill } = this.props;
      const id = slug(skill);

      if(inViewport(document.querySelector(`#${ id }`))) {
        document.querySelector(`#${ id } .skillbar-bar`).style.width = `${ percent }%`;
        this.setState({
          handleScroll: false
        })
      }
    }
  }

  render() {

    const { percent, skill } = this.props;

    return (
      <div className="skillbar" id={ slug(skill) }>
        <EventListener target="window" 
          onScroll={withOptions(this.handleScroll, {passive: true, capture: false})} />
        <span className="skillbar-title">{ skill }</span>
        <p className="skillbar-bar"></p>
        <span className="skill-bar-percent">{ percent }%</span>

        <style jsx>{`

          $height: 30px;

          .skillbar {
            position: relative;
            display: inline-block;
            margin: 5px 0;
            width: 100%;
            background: #eee;
            height: $height;
            border-radius: 3px;
            width: 100%;
            text-align: left;
          }

          .skillbar-title {
            position: absolute;
            top: 0;
            left: 0;
            width: 80px;
            font-weight: bold;
            font-size: 13px;
            color: #ffffff;
            background: #6adcfa;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            background: rgba(0, 0, 0, 0.1);
            padding: 0 15px;
            height: $height;
            line-height: $height;
            text-align:center;
          }

          .skillbar-bar {
            height: $height;
            width: 0px;
            background: var(--green);
            border-radius: 3px;
            display: inline-block;
            margin: 0;
            transition: all 1.5s ease;
            will-change: width;
          }

          .skill-bar-percent {
            position: absolute;
            right: 10px;
            top: 0;
            font-size: 15px;
            height: $height;
            line-height: $height;
            color: var(--black);
          }
        `}</style>
      </div>
    )
  }
}
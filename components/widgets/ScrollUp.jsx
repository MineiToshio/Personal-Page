import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

export default class ScrollUp extends React.Component {
  render() {

    const style = {
      bottom: 25,
      right: 25,
    }

    return (
      <ScrollToTop showUnder={160} style={style}>
        <div className="top">
          <FA icon={['fas', 'angle-up']} />
        </div>

        <style jsx>{`
          .top {
            width: 40px;
            height: 40px;
            background: #515a5f;
            border-radius: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font-size: 30px;
            transition: all .3s ease;
            
            &:hover {
              opacity: 0.8;
            }
          }
        `}</style>
      </ScrollToTop>
    )
  }
}
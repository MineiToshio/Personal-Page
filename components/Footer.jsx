import React from 'react';
import IconMenu from './IconMenu';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <IconMenu />
        <div>Toshio Minei ©2018</div>

        <style jsx>{`
          footer {
            padding: 20px;
            display: flex;
            flex-direction: columns;
            align-items: center;
            justify-content: center;
            background: var(--green);
            flex-direction: column;

            div {
              margin-top: 20px;
            }
          }
        `}</style>
      </footer>
    )
  }
}
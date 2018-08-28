import React from 'react';
import IconMenu from '../social-icons/IconMenu';

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <IconMenu />
        <div>Toshio Minei ©2018</div>

        <style jsx>{`
          $color: #949494;

          footer {
            margin-top: 50px;
            padding: 15px;
            display: flex;
            flex-direction: columns;
            align-items: center;
            justify-content: center;
            background: var(--black);
            flex-direction: column;
            color: $color;

            div {
              margin-top: 15px;
            }

            :global(a) {
              color: $color;
            }
          }
        `}</style>
      </footer>
    )
  }
}
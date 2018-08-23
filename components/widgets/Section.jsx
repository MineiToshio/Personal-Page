import React from 'react';

export default class Section extends React.Component {
  render() {

    const { children, title, subtitle, id } = this.props;

    return (
      <section id={ id }>
        <h1>{ title }</h1>
        <span>{ subtitle }</span>
        <div className="underline"></div>
        { children }

        <style jsx>{`

          section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;

            h1 {
              color: var(--green);
              text-transform: uppercase;
              text-align: center;
              font-family: 'BebasNeueRegular', sans-serif;
              font-weight: normal;
              font-size: 40pt;
              margin: 60px 0 10px;
            }

            .underline {
              width: 70px;
              height: 4px;
              background: #444649;
              margin-bottom: 35px;
            }

            span {
              font-size: 16pt;
              margin-bottom: 50px;
              color: #777;
              text-transform: uppercase;
            }
          }
        `}</style>
      </section>
    )
  }
}
import React from 'react';

export default class SectionFooter extends React.Component {
  render() {
    const { title, url, button } = this.props;
    return (
      <div className="ver-mas">
        <p>{title}</p>
        <a href={url} target="_blank" rel="noopener" aria-label={title}>{button}</a>

        <style jsx>{`
          .ver-mas {
            width: 100%;
            text-align: center;
            font-family: 'BebasNeue',sans-serif;
            font-size: 30px;
            color: var(--blue);
            background-color: #f5f5f5;
            padding: 40px 0;
            margin-top: 40px;

            p {
              margin: 0 0 10px 0;
            }

            a {
              color: var(--green);
              margin: 5px;
              border: 2px solid var(--green);
              text-decoration: none;
              padding: 10px;
              border-radius: 5px;
              font-size: 15pt;

              &:hover {
                background-color: var(--green);
                color: white;
              }
            }
          }
        `}</style>
      </div>
    )
  }
}
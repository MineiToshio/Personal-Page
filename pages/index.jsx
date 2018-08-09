import React from 'react';
import Layout from '../components/Layout';
import Portada from '../components/Portada';
import Section from '../components/Section';

export default class extends React.Component {
  render () {
    return (
      <div>
        <Portada />
        <Layout title='Toshio Minei'>
          <Section title="Sobre Mi" subtitle="Soy un fullstack web developer"></Section>
        </Layout>

        <style jsx>{`

          section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

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
      </div> 
    )
  }
}
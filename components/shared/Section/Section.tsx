import React, { FC } from 'react';
import theme from '@/styles/theme';
import { SlideElement } from '..';

type Props = {
  children: React.ReactNode | Array<React.ReactNode>;
  title: string;
  subtitle: string;
  id: string;
};

const Section: FC<Props> = ({ children, title, subtitle, id }) => (
  <section id={id}>
    <SlideElement animation="slide-down">
      <h1>{title}</h1>
    </SlideElement>
    <SlideElement animation="slide-in-left">
      <div className="description">{subtitle}</div>
    </SlideElement>
    <SlideElement animation="slide-in-right">
      <div className="underline" />
    </SlideElement>
    {children}

    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
      }
      h1 {
        color: ${theme.color.main};
        text-transform: uppercase;
        text-align: center;
        font-family: ${theme.font.family.title};
        font-weight: normal;
        font-size: 40pt;
        margin: 60px 0 10px;
      }
      .underline {
        width: 70px;
        height: 4px;
        background: #444649;
        margin-bottom: 45px;
      }
      .description {
        font-size: 16pt;
        margin-bottom: 50px;
        color: ${theme.color.muted};
        text-transform: uppercase;
        text-align: center;
      }
      @media only screen and (max-width: 768px) {
        h1 {
          font-size: 35pt;
        }
        .description {
          font-size: 14pt;
          margin-bottom: 30px;
          padding: 0 5px;
        }
        .underline {
          margin-bottom: 35px;
        }
      }
      @media only screen and (max-width: 425px) {
        h1 {
          font-size: 30pt;
          margin: 50px 0 10px;
        }
        .description {
          font-size: 13pt;
          margin-bottom: 25px;
        }
        .underline {
          margin-bottom: 20px;
        }
      }
    `}</style>
  </section>
);

export default Section;

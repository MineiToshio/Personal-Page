import React, { FC } from 'react';
import { Typography, Spacer, FlexContainer } from '@/components/core';
import useBreakpointValues from '@/hooks/useBreakpointValues';
import { SlideElement, MainContainer } from '@/components/shared';
import theme from '@/styles/theme';

type Props = {
  children: React.ReactNode | Array<React.ReactNode>;
  title: string;
  subtitle: string;
  id: string;
};

const Section: FC<Props> = ({ children, title, subtitle, id }) => (
  <section id={id}>
    <FlexContainer fullWidth vertical centered>
      <MainContainer>
        <FlexContainer vertical centered fullWidth>
          <Spacer direction="vertical" size={useBreakpointValues({ xs: 8, sm: 10 })} />
          <SlideElement animation="slide-down">
            <Typography variant="title" color="main" lineHeight="none">
              {title}
            </Typography>
          </SlideElement>
          <Spacer direction="vertical" size={2} />
          <SlideElement animation="slide-in-left">
            <Typography variant="subtitle" color="muted" lineHeight="small" align="center">
              {subtitle}
            </Typography>
          </SlideElement>
          <Spacer direction="vertical" size={useBreakpointValues({ xs: 4, md: 5, lg: 6 })} />
        </FlexContainer>
      </MainContainer>
      {children}
    </FlexContainer>

    <style jsx>{`
      section {
        overflow-x: hidden;
      }
      @media only screen and (max-width: 768px) {
        .description {
          padding: 0 5px;
        }
      }
    `}</style>
  </section>
);

export default Section;

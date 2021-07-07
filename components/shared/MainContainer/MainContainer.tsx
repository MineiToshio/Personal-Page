import React, { FC } from 'react';
import { Spacer, FlexContainer } from '@/components/core';

type Props = {
  children: React.ReactNode | Array<React.ReactNode>;
  centered?: boolean;
};

const Section: FC<Props> = ({ children, centered = false }) => (
  <FlexContainer fullWidth centered={centered}>
    <Spacer direction="horizontal" size={2} />
    {children}
    <Spacer direction="horizontal" size={2} />
  </FlexContainer>
);

export default Section;

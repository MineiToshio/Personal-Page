import React from 'react';
import { Typography, Spacer } from '@/components/core';

type Props = {
  text: string;
};

const InfoText = ({ text }: Props) => (
  <>
    <Typography fontSize="tiny" lineHeight="small">
      {text}
    </Typography>
    <Spacer direction="vertical" size={1} />
  </>
);

export default InfoText;

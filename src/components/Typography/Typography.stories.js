import React from 'react';
import Typography from './Typography';

export default {
  title: 'Typography',
  parameters: {
    component: Typography,
    componentSubtitle: 'A simple `p` tag',
  },
};

export const Default = () => <Typography>Default font size</Typography>;

export const Font24 = () => (
  <Typography fontSize="24px">24px in size</Typography>
);

export const Font36 = () => (
  <Typography fontSize="36px">36px in size</Typography>
);

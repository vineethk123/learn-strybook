import React from 'react';
import { action } from '@storybook/addon-actions';
import CustomButton from './CustomButton';

// Meta data about the story should be the default export
export default {
  title: 'Custom Button',
  component: CustomButton,
};

// Stories should be named exports
export const DefaultButton = () => (
  <CustomButton onClick={action('white button clicked')}>
    A white button
  </CustomButton>
);

// Recommended naming convention is same as that of a React component
export const BlackButton = () => (
  <CustomButton background="black" onClick={action('black button clicked')}>
    I'm a different button!
  </CustomButton>
);

export const BlueButton = () => (
  <CustomButton background="blue" onClick={action('blue button clicked')}>
    Blue is cool
  </CustomButton>
);

import React from 'react';
import { screen, render } from '@testing-library/react';
import Image from './index.js';

describe('Image', () => {
  test('should render an image', () => {
    render(
      <Image
        src="https://user-images.githubusercontent.com/321738/63501763-88dbf600-c4cc-11e9-96cd-94adadc2fd72.png"
        height={12}
        width={12}
      />
    );
    expect(screen.getByAltText('img-resized')).toBeInTheDocument();
    // expect(screen.getByAltText('img-resized')).toMatchSnapshot();
  });
});

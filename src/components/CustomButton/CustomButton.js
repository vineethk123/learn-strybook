import React from 'react';

const backgroundColorAndTextColorMappings = {
  black: 'white',
  white: 'black',
  blue: 'white',
};

function CustomButton({
  background = 'white',
  onClick = () => null,
  children,
}) {
  const color = backgroundColorAndTextColorMappings[background];
  return (
    <button
      onClick={onClick}
      style={{ color, background, cursor: 'pointer', padding: '10px' }}
    >
      {children}
    </button>
  );
}

export default CustomButton;

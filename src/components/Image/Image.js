import React from 'react';
import PropTypes from 'prop-types';

function Image(props) {
  const { src, height, width } = props;
  return (
    <img
      style={{ objectFit: 'contain' }}
      src={src}
      alt="img-resized"
      height={height}
      width={width}
    />
  );
}

Image.defaultProps = {
  height: 200,
  width: 200,
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Image;

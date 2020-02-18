import React from 'react';
import PropTypes from 'prop-types';

/**
 - A component to display text at various standard sizes.
 */
function Typography({ fontSize, children }) {
  return <p style={{ fontSize }}>{children}</p>;
}

Typography.defaultProps = {
  fontSize: '12px',
};

Typography.propTypes = {
  /**
   * You can pick any one size from 12px, 24px and 36px.
   */
  fontSize: PropTypes.oneOf(['12px', '24px', '36px']),
  /**
   * Some text to be rendered inside the paragraph.
   */
  children: PropTypes.node.isRequired,
};

export default Typography;

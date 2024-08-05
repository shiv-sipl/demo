import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ message }) => {
  return <div>{message}</div>;
};

MyComponent.propTypes = {
  message: PropTypes.string.isRequired
};

export default MyComponent;

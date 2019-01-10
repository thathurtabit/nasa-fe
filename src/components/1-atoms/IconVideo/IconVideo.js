import React from 'react';
import PropTypes from 'prop-types';
import SVG from './IconVideo.styled';

const IconVideo = props => (
  <SVG width={50} height={50} viewBox="0 0 25 25" {...props}>
    <title>{props.title}</title>
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM9 17V7l9 5.146L9 17z" />
  </SVG>
);

export default IconVideo;

IconVideo.propTypes = {
  title: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import SVG from './IconAudio.styled';

const IconAudio = props => (
  <SVG width={50} height={50} viewBox="0 0 25 25" {...props}>
    <title>{props.title}</title>
    <path d="M5 17h-5v-10h5v10zm2-10v10l9 5v-20l-9 5zm17 4h-5v2h5v-2zm-1.584-6.232l-4.332 2.5 1 1.732 4.332-2.5-1-1.732zm1 12.732l-4.332-2.5-1 1.732 4.332 2.5 1-1.732z" />
  </SVG>
);

export default IconAudio;

IconAudio.propTypes = {
  title: PropTypes.string.isRequired,
};

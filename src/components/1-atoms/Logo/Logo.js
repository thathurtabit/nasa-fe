import React from 'react';
import PropTypes from 'prop-types';
import { SVG } from './Logo.styled';

const LogoSVG = props => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="145" height="40">
    <title>{props.title}</title>
    <defs>
      <clipPath id="a">
        <path d="M0 0h145v39H0z" />
      </clipPath>
    </defs>
    <path
      d="M5 39V10a6 6 0 0 1 6-6 5.993 5.993 0 0 1 5.644 3.988l6.712 24.024A5.993 5.993 0 0 0 29 36a6 6 0 0 0 6-6V1"
      stroke="red"
      strokeWidth="8"
      fill="none"
    />
    <path
      d="M40.5 41.5L51.356 7.988A5.992 5.992 0 0 1 57 4a5.992 5.992 0 0 1 5.644 3.988L73.5 41.5"
      stroke="red"
      strokeWidth="8"
      clipPath="url(#a)"
      fill="none"
    />
    <path
      d="M104 5H84.494a7.503 7.503 0 0 0-7.504 7.502 7.505 7.505 0 0 0 7.51 7.502h10A7.5 7.5 0 1 1 94.5 35L74 34.992"
      stroke="red"
      strokeWidth="8"
      strokeMiterlimit="0"
      fill="none"
    />
    <path
      d="M106.625 41.5L117.5 7.988a6.002 6.002 0 0 1 11.308 0L139.683 41.5"
      stroke="red"
      clipPath="url(#a)"
      strokeWidth="8"
      fill="none"
    />
  </SVG>
);

export default LogoSVG;

LogoSVG.propTypes = {
  title: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import LogoWrap, { SVG, Strapline } from './Logo.styled';

const LogoSVG = props => (
  <LogoWrap>
    <SVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478.63 132.92">
      <title>{props.title}</title>
      <path d="M225.21,129.62,194.44,33.74a7.38,7.38,0,0,0-1.67-3.07,3.77,3.77,0,0,0-2.83-1.24c-2.44,0-4.1,1.5-5,4.48l-30.44,95.71-30.45-.21L157.5,21.76A28.55,28.55,0,0,1,169.89,5.65,37.74,37.74,0,0,1,190.28,0q20.79,0,29.94,18.41l1.16,2.32,25.13,80,1,1.82h66.22a10.4,10.4,0,0,0,8.07-3.63A12.64,12.64,0,0,0,325,90.16,11,11,0,0,0,322.62,83a7.46,7.46,0,0,0-6.06-3H275.24q-14.61,0-24.4-12.48-9.14-11.64-9.13-27.45,0-16.49,9.15-26.63,10-11.15,28.62-11.15h68.39V29.43h-67.1a8.79,8.79,0,0,0-7.47,3.88,14.91,14.91,0,0,0-2.83,9A11.71,11.71,0,0,0,273.13,50a8.41,8.41,0,0,0,6.81,3.22h35.85q15.93,0,26.81,10t10.87,26.68q0,16-9.37,27.52-9.87,12.18-24.56,12.18H225.21ZM28.44,35.39a8.67,8.67,0,0,1,1.24-4.55,4.7,4.7,0,0,1,3.41-2.4,5,5,0,0,1,4.4,1.07,8.73,8.73,0,0,1,2.74,4.23l1.5,4.81L62.66,112a26.18,26.18,0,0,0,13.46,16.26q8.8,4.64,21.94,4.64,14.94,0,22.59-8.64t7.64-24.62V2.85H99.53v97.81c0,2.33-1.28,3.71-3.83,4.16a4.16,4.16,0,0,1-3.91-1.08,8.19,8.19,0,0,1-2.42-3.9l-2.83-8.79L68.24,26.53A35.5,35.5,0,0,0,55.08,7.13,36.79,36.79,0,0,0,32.62,0q-15.48,0-23,5.81Q0,13.43,0,32.35v97.06H28.44v-94ZM381,21.13a26.93,26.93,0,0,1,11.82-15.8A37.92,37.92,0,0,1,413.09,0,36.38,36.38,0,0,1,433,5.33,27.17,27.17,0,0,1,444.53,20.8l34.1,108.82H450L417.08,31.93q-1-3.16-3.83-3.16-2.67,0-3.66,3.16l-32.28,97.69H347.2Z" />
    </SVG>
    <Strapline>Asset Search</Strapline>
  </LogoWrap>
);

export default LogoSVG;

LogoSVG.propTypes = {
  title: PropTypes.string.isRequired,
};

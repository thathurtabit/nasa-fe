import styled from 'styled-components';

export const SVG = styled.svg`
  fill: ${props => props.theme.logo.fill};
  max-width: ${props => (props.loader ? '50px' : '400px')};
  width: 100%;
`;

import styled from 'styled-components';

const SVG = styled.svg`
  fill: ${props => props.theme.colors.white};
  filter: drop-shadow(5px 5px 0 rgba(0, 0, 0, 0.2));
  position: relative;
`;

export default SVG;

import styled from 'styled-components';

export const SVG = styled.svg`
  fill: ${props => props.theme.logo.fill};
  height: 25px;
  max-width: 100px;
  transition: fill ${props => props.theme.transition.duration}
    ${props => props.theme.transition.easeOut};
  width: 100%;
`;

export const Strapline = styled.span`
  color: ${props => props.theme.colors.copy};
  display: inline-block;
  font-size: calc(${props => props.theme.fonts.baseSize} - 6px);
  letter-spacing: 2px;
  line-height: 10px;
  text-align: left;
  transition: color ${props => props.theme.transition.duration}
    ${props => props.theme.transition.easeOut};
  width: 50px;
`;

const LogoWrap = styled.div`
  align-items: center;
  display: flex;
`;

export default LogoWrap;

import styled from 'styled-components';

export const MediaWrap = styled.figure`
  margin: 0;
  min-height: 200px;
  position: relative;
`;

export const Credit = styled.figcaption`
  font-size: calc(${props => props.theme.fonts.baseSize} - 2px);
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.brand};
  font-size: calc(${props => props.theme.fonts.baseSize} + 2vmin);
  line-height: 1.3;
  margin: 20px auto 40px;
  max-width: ${props => props.theme.breakpoints.lg};
`;

export const Description = styled.p`
  font-size: ${props => props.theme.fonts.baseSize};
  margin: 0 auto 60px;
  max-width: ${props => props.theme.breakpoints.md};

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: calc(${props => props.theme.fonts.baseSize} + 0.1vmin);
    line-height: 1.7;
  }
`;

const ItemSingleStyled = styled.article`
  margin: 0 auto 100px;
  max-width: ${props => props.theme.breakpoints.sm};
  overflow-wrap: break-word;
  padding: 20px;
  position: relative;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: ${props => props.theme.breakpoints.lg};
  }
`;

export default ItemSingleStyled;

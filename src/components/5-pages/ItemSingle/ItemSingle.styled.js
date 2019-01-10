import styled from 'styled-components';

export const Title = styled.h1`
  color: ${props => props.theme.colors.brand};
  font-size: calc(${props => props.theme.fonts.baseSize} + 2vmin);
  line-height: 1.3;
  margin: 20px 0 40px;
`;

export const Description = styled.p`
  font-size: ${props => props.theme.fonts.baseSize};
  margin-bottom: 60px;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: calc(${props => props.theme.fonts.baseSize} + 0.1vmin);
    line-height: 1.7;
  }
`;

const ItemSingleStyled = styled.article`
  margin: 0 auto 100px;
  max-width: ${props => props.theme.breakpoints.sm};
  padding: 20px;
  position: relative;
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    max-width: ${props => props.theme.breakpoints.md};
  }
`;

export default ItemSingleStyled;

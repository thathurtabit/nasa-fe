import styled from 'styled-components';

export const Quote = styled.q`
  color: ${props => props.theme.colors.title};
  display: inline-block;
  font-weight: bold;
  max-width: 150px;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  top: 6px;
  white-space: nowrap;
`;

export const Span = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.title};
`;

const SearchInfoStyled = styled.p`
  text-align: center;
  font-size: calc(${props => props.theme.fonts.baseSize} - 1px);
`;

export default SearchInfoStyled;

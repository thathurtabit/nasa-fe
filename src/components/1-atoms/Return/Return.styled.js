import styled from 'styled-components';

const ReturnStyled = styled.a`
  background: ${props => props.theme.button.bg};
  border-radius: 30px;
  color: ${props => props.theme.return.text};
  display: inline-block;
  font-size: calc(${props => props.theme.fonts.baseSize} - 1px);
  margin: 40px 0 0;
  padding: 10px 30px;

  &:hover,
  &:focus {
    background: ${props => props.theme.return.hover};
    color: ${props => props.theme.return.text};
    text-decoration: none;
  }
`;

export default ReturnStyled;

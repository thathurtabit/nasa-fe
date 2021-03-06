import styled from 'styled-components';

const ButtonStyled = styled.a`
  background: ${props => props.theme.button.bg};
  border-radius: 50px;
  color: ${props => props.theme.button.text};
  display: block;
  margin: 0 auto;
  max-width: 200px;
  padding: 10px 0;
  text-align: center;
  text-decoration: none;
  width: 100%;

  &:hover,
  &:active {
    background: ${props => props.theme.button.hover};
    color: ${props => props.theme.button.text};
    text-decoration: none;
  }

  &:focus {
    outline: 2px dotted ${props => props.theme.colors.copy};
    outline-offset: 4px;
  }
`;

export default ButtonStyled;

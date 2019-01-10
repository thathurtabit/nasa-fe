import styled from 'styled-components';

export const SearchBarWrap = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SearchBarInput = styled.input`
  border: 2px solid ${props => props.theme.input.border};
  border-right: 0;
  font-family: ${props => props.theme.fonts.fontFamily};
  font-size: ${props => props.theme.fonts.baseSize};
  padding: 5px 10px;
  outline: 0;
  text-align: center;
  width: 100%;
  transition: border-color ${props => props.theme.transition.durationFast}
    ease-out;
`;

export const SearchBarSubmit = styled.button`
  align-items: center;
  background: transparent;
  border: 2px solid ${props => props.theme.input.border};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: ${props => props.theme.fonts.baseSize};
  justify-content: center;
  outline: 0;
  padding: 5px 10px;
  position: relative;
  text-align: center;
  transition: border-color ${props => props.theme.transition.durationFast}
      ease-out,
    background ${props => props.theme.transition.durationFast} ease-out;

  &:hover,
  &:focus {
    background: ${props => props.theme.links.hover};

    svg {
      fill: ${props => props.theme.colors.bodyBg};
    }
  }
`;

const SearchBar = styled.form`
  display: flex;
  margin: 0 auto 15px;
  max-width: 300px;
  position: relative;

  &:hover,
  &:focus {
    input,
    button {
      border-color: ${props => props.theme.input.hover};
    }
  }

  &:focus-within {
    input,
    button {
      border-color: ${props => props.theme.input.focus};
    }
  }
`;

export default SearchBar;

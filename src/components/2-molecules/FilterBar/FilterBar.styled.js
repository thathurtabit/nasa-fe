import styled from 'styled-components';

export const Filter = styled.button`
  background: ${props =>
    props.active ? props.theme.colors.brand : props.theme.colors.white};
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  border: 0;
  color: ${props =>
    props.active ? props.theme.colors.white : props.theme.colors.copy};
  cursor: pointer;
  font-family: ${props => props.theme.fonts.fontFamily};
  font-size: calc(${props => props.theme.fonts.baseSize} - 4px);
  margin: 5px;
  padding: 1px 10px;
  position: relative;
  transition: box-shadow ${props => props.theme.transition.duration}
    ${props => props.theme.transition.easeOut};

  &:hover,
  &:focus {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1),
      0 2px 0 0 ${props => props.theme.colors.brand};
    outline: 0;
  }
`;

const FilterBarStyled = styled.section`
  position: relative;

  &::after {
    border-top: 5px dotted ${props => props.theme.hr.borderColor};
    bottom: -20px;
    content: '';
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    width: 30px;
  }
`;

export default FilterBarStyled;

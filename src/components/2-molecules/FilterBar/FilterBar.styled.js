import styled from 'styled-components';

export const Filter = styled.button`
  position: relative;
  background: ${props => (props.active ? 'red' : 'transparent')};
`;

const FilterBarStyled = styled.section`
  position: relative;
`;

export default FilterBarStyled;

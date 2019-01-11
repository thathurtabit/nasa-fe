import styled from 'styled-components';

const ItemListStyled = styled.ul`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  justify-items: center;
  list-style-type: none;
  margin: 20px auto 100px;
  max-width: ${props => props.theme.itemList.maxWidth};
  padding: 0 40px;
  transform: translateY(20px);
  transition: opacity ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut},
    transform ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut};

  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export default ItemListStyled;

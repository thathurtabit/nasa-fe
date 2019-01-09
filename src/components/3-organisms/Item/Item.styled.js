import styled from 'styled-components';

export const ItemContent = styled.article`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 20px;
  width: calc(100% - 80px);

  img {
    margin: 0;
    max-width: 100%;
    width: initial;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    flex-direction: row;
    padding: 40px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    padding: 50px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    padding: 60px;
  }
`;

export const ItemLeft = styled.div`
  order: 1;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    overflow: hidden;
    width: 50%;
  }
`;

export const ItemRight = styled.div`
  order: 2;
  padding: 30px 0;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-start;
    padding: 0 0 0 60px;
    text-align: left;
    width: 50%;

    a {
      margin: auto 0 0;
    }
  }
`;

export const ShortDescription = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  color: ${props => props.theme.colors.copy};
  display: -webkit-box;
  font-size: ${props => props.theme.fonts.baseSize};
  margin-bottom: 40px;
  max-height: 200px;
  overflow: hidden;
  overflow: hidden;
  text-transform: capitalize;
`;

const ItemStyled = styled.article`
  position: relative;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut},
    transform ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut};

  &.item-enter-done {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default ItemStyled;

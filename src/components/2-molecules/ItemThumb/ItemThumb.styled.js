import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IconWrap = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: ${props => (props.thumb ? props.theme.thumb.boxShadow : 'none')};
  display: flex;
  flex-direction: column;
  height: ${props => (props.large ? '200px' : '150px')};
  justify-content: center;
  margin: 0 auto;
  max-width: ${props => props.theme.thumb.maxWidth};
  position: relative;
  transition: box-shadow ${props => props.theme.thumb.transition.duration}
    ${props => props.theme.transition.easeOut};
  max-width: ${props => (props.large ? '300px' : '200px')};
  width: 100%;

  svg {
    transition: fill ${props => props.theme.thumb.transition.duration}
      ${props => props.theme.transition.easeOut};
  }

  a:focus &,
  &:hover {
    box-shadow: ${props =>
      props.thumb ? props.theme.thumb.boxShadowHover : 'none'};
    svg {
      fill: ${props => props.theme.colors.brand};
    }
  }
`;

export const ItemLink = styled(Link)`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  position: relative;

  &:focus {
    outline: 0;
  }
`;

export const ThumbTitle = styled.p`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: ${props => props.theme.colors.copy};
  display: -webkit-box;
  font-size: calc(${props => props.theme.fonts.baseSize} - 3px);
  font-weight: 300;
  margin-bottom: 40px;
  margin-top: auto;
  max-height: 40px;
  max-width: ${props => props.theme.thumb.maxWidth};
  overflow: hidden;
  padding-top: 20px;
`;

const ItemThumbStyled = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 150px;
  position: relative;
`;

export default ItemThumbStyled;

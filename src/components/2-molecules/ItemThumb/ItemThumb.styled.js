import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IconWrap = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: ${props => (props.thumb ? props.theme.thumb.boxShadow : 'none')};
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  position: relative;
  transition: box-shadow ${props => props.theme.thumb.transition.duration}
    ${props => props.theme.transition.easeOut};
  width: 200px;

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

export const ThumbTitle = styled.h4`
  color: ${props => props.theme.colors.copy};
  font-size: calc(${props => props.theme.fonts.baseSize} - 3px);
  font-weight: 300;
  margin-top: auto;
  max-height: 50px;
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

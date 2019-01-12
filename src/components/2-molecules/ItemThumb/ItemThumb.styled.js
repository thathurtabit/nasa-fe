import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { apiAssets, mediaType } from '../../../utils/constants/constants';

const bgVideo = css`
  background-image:  url('${apiAssets}/${props => props.type}/${props =>
  props.itemID}/${props => props.itemID}~preview_thumb_00001.png');
`;

const bgAudio = css`
  background-image: url('https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001857/GSFC_20171208_Archive_e001857~thumb.jpg');
`;

export const IconWrap = styled.div`
  align-items: center;
  background: ${props => props.theme.colors.white};
  ${props => (props.type === mediaType.video ? bgVideo : bgAudio)};
  background-size: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: ${props => (props.thumb ? props.theme.thumb.boxShadow : 'none')};
  display: flex;
  flex-direction: column;
  height: ${props => (props.large ? '150px' : '150px')};
  justify-content: center;
  margin: 0 auto;
  max-width: ${props => (props.large ? '400px' : '250px')};
  position: relative;
  transition: box-shadow ${props => props.theme.thumb.transition.duration}
    ${props => props.theme.transition.easeOut};
  width: 100%;

  svg {
    transition: fill ${props => props.theme.thumb.transition.duration}
      ${props => props.theme.transition.easeOut};
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    height: ${props => (props.large ? '125px' : '100px')};
    max-width: ${props => (props.large ? '400px' : '200px')};
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    height: ${props => (props.large ? '300px' : '150px')};
    max-width: ${props => (props.large ? '400px' : '200px')};
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
  width: 100%;

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
  margin: auto auto 40px;
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
  width: 100%;
`;

export default ItemThumbStyled;

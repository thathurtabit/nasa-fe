import styled from 'styled-components';

const IMG = styled.img`
  border: ${props =>
    props.thumb ? `2px solid ${props.theme.colors.bodyBg}` : '0'};
  border-top: 0;
  border-left: 0;
  box-shadow: ${props => (props.thumb ? props.theme.thumb.boxShadow : 'none')};
  display: block;
  margin: 0 auto;
  max-height: ${props => (props.modal ? '350px' : '100%')};
  max-width: 100%;
  opacity: 0;
  transform: scale(0.97);
  transition: opacity ${props => props.theme.thumb.transition.duration}
      ${props => props.theme.transition.easeOut},
    box-shadow ${props => props.theme.thumb.transition.duration}
      ${props => props.theme.transition.easeOut},
    transform ${props => props.theme.thumb.transition.duration}
      ${props => props.theme.transition.easeOut};

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    width: ${props => (props.thumb ? '250px' : '100%')};
  }

  a:focus &,
  &:hover {
    box-shadow: ${props =>
      props.thumb ? props.theme.thumb.boxShadowHover : 'none'};
  }

  &.image-enter-done {
    opacity: 1;
    transform: scale(1);
  }
`;

export default IMG;

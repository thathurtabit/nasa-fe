import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotateY(0);
  }
  100% {
    transform: rotateY(180deg)
  }
`;

const loaderSize = 100;

const LoaderStyled = styled.section`
  animation: ${rotate} 1s ease-out alternate infinite;
  height: ${loaderSize}px;
  left: 50%;
  margin-left: -${loaderSize / 2}px;
  margin-top: -${loaderSize / 2}px;
  opacity: ${props => (props.isLoading ? '1' : '0')};
  position: fixed;
  top: 50%;
  transform: ${props => (props.isLoading ? 'scale(1)' : 'scale(0)')};
  width: ${loaderSize}px;
  transition: transform ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut},
    opacity ${props => props.theme.transition.duration}
      ${props => props.theme.transition.easeOut};
  z-index: ${props => props.theme.zIndex.overlay};
`;

export default LoaderStyled;

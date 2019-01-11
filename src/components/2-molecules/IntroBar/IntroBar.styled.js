import styled from 'styled-components';

const IntroBarStyled = styled.section`
  margin: 30px 20px 60px;
  position: relative;
  text-align: center;

  &::after {
    border-top: 4px dotted ${props => props.theme.hr.borderColor};
    content: '';
    left: 50%;
    position: absolute;
    top: -7px;
    transform: translateX(-50%);
    width: 30px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h1,
  p {
    margin: 0 20px 10px;

    @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
      margin: 0 20px;
    }
  }
`;

export default IntroBarStyled;

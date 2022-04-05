import styled from 'styled-components';

const LogoStyled = styled.nav`
  position: relative;
  z-index: 10;
  margin-top: 6rem;

  h1 {
    font-family: var(--heroFont);
    font-size: 3.2rem;
    font-size: clamp(2.2rem, 6vw, 3.2rem);
  }

  span {
    margin-right: 1rem;
    font-size: 3.8rem;
    font-size: clamp(3rem, 6vw, 3.8rem);
  }
`;

const Logo = () => {
  return (
    <LogoStyled>
      <h1>
        <span>🥘</span>
        PICK YOUR DISHES!
      </h1>
    </LogoStyled>
  );
};

export default Logo;

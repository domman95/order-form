import styled from 'styled-components';
import Logo from './Logo';
import Background from './styles/Background';
import GlobalStyles from './styles/GlobalStyles';

const StyledLayout = styled.div`
  padding: 2rem;
  max-width: 120rem;
  margin: 0 auto;
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <GlobalStyles />
      <Background />
      <Logo />
      {children}
    </StyledLayout>
  );
}

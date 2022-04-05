import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const StyledLayout = styled.div`
  background-color: red;
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      <GlobalStyles />
      {children}
    </StyledLayout>
  );
}

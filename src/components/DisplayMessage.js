import styled from 'styled-components';

const StyledMessage = styled.div`
  background-color: ${({ status }) =>
    status ? 'var(--successGreen)' : 'var(--errorRed)'};
  padding: 1.5rem 1rem;
  box-shadow: var(--boxShadow);
  border-radius: var(--borderRadius);
  font-size: 1.6rem;
`;

export default function DisplayMessage({ status, message }) {
  return <StyledMessage status={status}>{message}</StyledMessage>;
}

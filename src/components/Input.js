import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.6rem;
  text-transform: capitalize;
  position: relative;

  .error {
    padding: 1.5rem 1rem;
    border-radius: var(--borderRadius);
    box-shadow: var(--boxShadow);
    background-color: var(--errorRed);
    color: var(--black);
  }

  .success {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
  }

  input {
    width: 100%;
    padding: 2rem;
    background-color: var(--white);
    border: 2px solid var(--yellow);
    border-radius: var(--borderRadius);
    box-shadow: var(--boxShadow);

    &::placeholder {
      color: var(--black);
      opacity: 0.4;
    }
  }
`;

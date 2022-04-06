import styled from 'styled-components';

export const FormStyles = styled.form`
  max-width: 80rem;
  margin: 6rem auto;
  width: 100%;
  padding: 2rem;
  border-radius: var(--borderRadius);
  background-color: var(--lightGreen);
  box-shadow: var(--boxShadow);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .select {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 1rem;

    li {
      position: relative;
      display: flex;
      width: 100%;

      label,
      input {
        display: block;
        width: 100%;
        padding: 2rem;
      }

      input[type='radio'] {
        display: block;
        width: 0;
        height: 0;
      }

      input[type='radio']:focus + label {
        outline: 2px solid #007efa;
      }

      input[type='radio']:checked + label {
        background: var(--yellow);
        border: 2px solid var(--white);
      }

      label {
        background-color: var(--white);
        border: 2px solid var(--yellow);
        border-radius: var(--borderRadius);
        box-shadow: var(--boxShadow);
        cursor: pointer;
        width: 100%;
        transition: 0.15s linear;
        text-align: center;
        font-size: 1.6rem;
      }
      label:hover {
        background: #eee;
      }
    }
  }

  button {
    font-size: 1.6rem;
    background-color: var(--yellow);
    border: none;
    box-shadow: var(--boxShadow);
    border-radius: var(--borderRadius);
    padding: 2rem;
    cursor: pointer;
  }
`;

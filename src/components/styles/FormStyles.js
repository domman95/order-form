import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
  }

  to {
    background-position: 100% 100%;
  }
`;

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
        position: relative;
      }

      input[type='radio'] {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        opacity: 0;
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

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }

    &::before {
      height: 10px;
      content: '';
      display: block;
      border-radius: var(--borderRadius);
      box-shadow: var(--boxShadow);
      background-image: linear-gradient(
        to right,
        var(--yellow) 0%,
        #e2b04a 50%,
        var(--yellow) 100%
      );
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

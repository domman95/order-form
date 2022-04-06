import styled from 'styled-components';

const Container = styled.li`
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
`;

export default function Radio({ name, title, onChange }) {
  return (
    <Container>
      <input
        type="radio"
        name="type"
        id={name}
        defaultChecked={name === 'pizza'}
        value={name}
        onChange={onChange}
      />
      <label htmlFor={name}>{title}</label>
    </Container>
  );
}

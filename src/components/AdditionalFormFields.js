import styled from 'styled-components';
import { Label } from './Input';

const Container = styled.div`
  background-color: var(--darkGreen);
  border-radius: var(--borderRadius);
  box-shadow: var(--boxShadow);
  padding: 2rem;
  display: grid;
  gap: 2rem;

  h3 {
    font-size: 2rem;
  }
`;

export default function AdditionalFormFields({ title, inputs, handleChange }) {
  if (title === 'pizza') {
    return (
      <Container>
        <h3>Additional fields for {title} 🍕</h3>
        <Label htmlFor="no_of_slices">
          Count of slices (1-10)
          <input
            type="number"
            name="no_of_slices"
            placeholder="1-10"
            min={1}
            max={10}
            step={1}
            value={inputs.no_of_slices}
            onChange={handleChange}
          />
        </Label>
        <Label htmlFor="diameter">
          Diameter (32-48)
          <input
            type="number"
            name="diameter"
            placeholder="32-48"
            step={0.01}
            min={32}
            max={48}
            onChange={handleChange}
            value={inputs.diameter}
          />
        </Label>
      </Container>
    );
  }

  if (title === 'soup') {
    return (
      <Container>
        <h3>Additional fields for {title} 🍜</h3>
        <Label htmlFor="spiciness_scale">
          Spiciness (1-10)
          <input
            type="number"
            name="spiciness_scale"
            placeholder="1-10"
            min={1}
            max={10}
            step={1}
            onChange={handleChange}
            value={inputs.spiciness_scale}
          />
        </Label>
      </Container>
    );
  }

  if (title === 'sandwich') {
    return (
      <Container>
        <h3>Additional fields for {title} 🥪</h3>
        <Label htmlFor="slices_of_bread">
          Slices of bread (1-10)
          <input
            type="number"
            name="slices_of_bread"
            placeholder="1-10"
            min={1}
            max={10}
            step={1}
            value={inputs.slices_of_bread}
            onChange={handleChange}
          />
        </Label>
      </Container>
    );
  }

  return null;
}

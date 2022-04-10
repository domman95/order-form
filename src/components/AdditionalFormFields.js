import styled from 'styled-components';
import { Label } from './Input';
import { Field } from 'redux-form';
import { renderField } from '../lib/renderField';

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

export default function AdditionalFormFields({ title }) {
  if (title === 'pizza') {
    return (
      <Container>
        <h3>Additional fields for {title} 🍕</h3>
        <Label htmlFor="no_of_slices">
          Count of slices (1-10)
          <Field
            component={renderField}
            type="number"
            name="no_of_slices"
            placeholder="1-10"
            min={1}
            max={10}
            step={1}
          />
        </Label>
        <Label htmlFor="diameter">
          Diameter (32-48)
          <Field
            component={renderField}
            type="number"
            name="diameter"
            placeholder="32-48"
            min={32}
            max={48}
            step={0.01}
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
          <Field
            component={renderField}
            type="number"
            name="spiciness_scale"
            placeholder="1-10"
            step={1}
            min={1}
            max={10}
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
          <Field
            component={renderField}
            type="number"
            name="slices_of_bread"
            placeholder="1-10"
            step={1}
            min={1}
            max={10}
          />
        </Label>
      </Container>
    );
  }

  return null;
}

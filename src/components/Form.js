import useForm from '../lib/useForm';
import AdditionalFormFields from './AdditionalFormFields';
import { Label } from './Input';
import Radio from './Radio';
import { FormStyles } from './styles/FormStyles';

const INITIAL_FORM_VALUES = {
  name: 'Favourite Pizza',
  preparation_time: '00:45:00',
  type: 'pizza',
  no_of_slices: 4,
  diameter: 33.4,
  slices_of_bread: 1,
  spiciness_scale: 1,
};

export default function Form() {
  const { inputs, handleChange, handleSubmit } = useForm(INITIAL_FORM_VALUES);

  return (
    <FormStyles onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Dish Name
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Dish name..."
          value={inputs.name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Preparation Time
        <input
          type="time"
          name="preparation_time"
          id="preparation_time"
          value={inputs.preparation_time}
          step={1}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Type
        <ul className="select">
          <Radio name="pizza" title="pizza 🍕" onChange={handleChange} />
          <Radio name="soup" title="soup 🍜" onChange={handleChange} />
          <Radio name="sandwich" title="sandwich 🥪" onChange={handleChange} />
        </ul>
      </Label>
      {inputs.type && (
        <AdditionalFormFields
          title={inputs.type}
          inputs={inputs}
          handleChange={handleChange}
        />
      )}
      <button type="submit">Send</button>
    </FormStyles>
  );
}

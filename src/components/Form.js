import useForm, { additionalValues } from '../lib/useForm';
import AdditionalFormFields from './AdditionalFormFields';
import { Label } from './Input';
import Radio from './Radio';
import { FormStyles } from './styles/FormStyles';

const INITIAL_FORM_VALUES = {
  name: 'Favourite Pizza',
  preparation_time: '00:45:00',
  type: '',
  no_of_slices: 0,
  diameter: 32,
  slices_of_bread: 0,
  spiciness_scale: 0,
};

export default function Form() {
  const { inputs, handleChange, clearForm } = useForm(INITIAL_FORM_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = {
      name: inputs.name,
      preparation_time: inputs.preparation_time,
      type: inputs.type,
      ...additionalValues(inputs),
    };

    fetch('https://frosty-wood-6558.getsandbox.com:443/dishes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...result }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      <fieldset aria-busy={false}>
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
            <Radio
              name="sandwich"
              title="sandwich 🥪"
              onChange={handleChange}
            />
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
      </fieldset>
    </FormStyles>
  );
}

import { useState } from 'react';

function additionalValues(inputs) {
  switch (inputs.type) {
    case 'pizza':
      return {
        no_of_slices: inputs.no_of_slices,
        diameter: inputs.diameter,
      };
    case 'soup':
      return {
        spiciness_scale: inputs.spiciness_scale,
      };

    case 'sandwich':
      return {
        slices_of_bread: inputs.slices_of_bread,
      };
    default:
      return null;
  }
}

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, min, max, type } = e.target;

    if (type === 'number') {
      value = Math.max(Number(min), Math.min(Number(max), Number(value)));
      value = Number(value).toFixed(2);
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const result = {
      name: inputs.name,
      preparation_time: inputs.preparation_time,
      type: inputs.type,
      ...additionalValues(inputs),
    };
    console.log(result);

    resetForm();
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key]) => [key, ''])
    );

    setInputs(blankState);
  }

  function resetForm() {
    setInputs(initial);
  }

  return {
    inputs,
    handleChange,
    handleSubmit,
    clearForm,
    resetForm,
  };
}

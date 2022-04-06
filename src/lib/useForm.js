import { useState } from 'react';

export function additionalValues(inputs) {
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
    clearForm,
    resetForm,
  };
}

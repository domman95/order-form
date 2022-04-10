import { useState } from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, min, max, type } = e.target;

    if (type === 'number') {
      value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    }

    if (type === 'number' && name === 'diameter') {
      value = +Number(value).toFixed(2);
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

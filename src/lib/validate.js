export const validate = (values) => {
  const errors = {};

  // name
  if (!values.name) {
    errors.name = '🚫 This field is required!';
  } else if (values.name.length > 20) {
    errors.name = 'Must be 20 characters or less';
  }
  // preparation_time
  if (!values.preparation_time) {
    errors.preparation_time = '🚫 This field is required!';
  } else if (values.preparation_time < '00:01:00') {
    errors.preparation_time = 'The time must be at least 1 min (00:01:00).';
  }
  // no_of_slices
  if (!values.no_of_slices) {
    errors.no_of_slices = '🚫 This field is required!';
  } else if (values.no_of_slices < 1 || values.no_of_slices > 10) {
    errors.no_of_slices = 'The count of slices has to be between 1 to 10!';
  } else if (/^[0-9]*$/.test(!values.diameter)) {
    errors.diameter = 'This field is ONLY for numbers!';
  }
  // diameter
  if (!values.diameter) {
    errors.diameter = '🚫 This field is required!';
  } else if (values.diameter < 32 || values.diameter > 48) {
    errors.diameter = 'The diameter has to be between 32 to 48!';
  } else if (/^[0-9]*$/.test(!values.diameter)) {
    errors.diameter = 'This field is ONLY for numbers!';
  }
  //spiciness_scale
  if (!values.spiciness_scale) {
    errors.spiciness_scale = '🚫 This field is required!';
  } else if (values.spiciness_scale < 1 || values.spiciness_scale > 10) {
    errors.spiciness_scale = 'The spiciness scale has to be between 1 to 10!';
  } else if (/^[0-9]*$/.test(!values.spiciness_scale)) {
    errors.spiciness_scale = 'This field is ONLY for numbers!';
  }
  // slices_of_bread
  if (!values.slices_of_bread) {
    errors.slices_of_bread = '🚫 This field is required!';
  } else if (values.slices_of_bread < 1 || values.slices_of_bread > 10) {
    errors.slices_of_bread = 'The count of slices has to be between 1 to 10!';
  } else if (/^[0-9]*$/.test(!values.slices_of_bread)) {
    errors.slices_of_bread = 'This field is ONLY for numbers!';
  }

  return errors;
};

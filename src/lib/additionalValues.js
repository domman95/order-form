export function additionalValues(inputs) {
  switch (inputs.type) {
    case 'pizza':
      return {
        no_of_slices: +inputs.no_of_slices,
        diameter: +inputs.diameter,
      };
    case 'soup':
      return {
        spiciness_scale: +inputs.spiciness_scale,
      };

    case 'sandwich':
      return {
        slices_of_bread: +inputs.slices_of_bread,
      };
    default:
      return null;
  }
}

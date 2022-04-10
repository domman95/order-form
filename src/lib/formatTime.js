export const formatTime = (time) => {
  // I don't like it but I can't find better solution...
  // On ios devices the step attribute doesn't work and I can't set the correct format
  if (time.length === 5) {
    return `${time}:00`;
  }
  return time;
};

export const renderField = (field) => (
  <>
    <input
      {...field.input}
      min={field.min}
      max={field.max}
      type={field.type}
      step={field.step}
      value={field.input.value}
    />
    {field.meta.touched && field.meta.error && (
      <span className="error">{field.meta.error}</span>
    )}
    {field.meta.valid && field.meta.visited && (
      <span className="success">✅</span>
    )}
  </>
);

import {
  reduxForm,
  Field,
  formValueSelector,
  SubmissionError,
} from 'redux-form';
import { connect } from 'react-redux';
import { Label } from './Input';
import { FormStyles } from './styles/FormStyles';
import { validate } from '../lib/validate';
import { renderField } from '../lib/renderField';
import AdditionalFormFields from './AdditionalFormFields';
import { additionalValues } from '../lib/additionalValues';
import { INITIAL_FORM_VALUES } from '../lib/initialFormValues';
import { useState } from 'react';
import DisplayMessage from './DisplayMessage';
import { useEffect } from 'react';

let Form = (props) => {
  const { handleSubmit, whatType, submitting, reset } = props;

  const [fetchStatus, setFetchStatus] = useState({
    status: null,
    message: '',
  });
  const { status, message } = fetchStatus;

  useEffect(() => {
    const closeDisplayMessageAfterDelay = () =>
      setTimeout(() => {
        setFetchStatus({
          status: null,
          message: '',
        });
      }, 5000);

    if (status !== null) {
      closeDisplayMessageAfterDelay();
    }

    return () => {
      clearTimeout(closeDisplayMessageAfterDelay);
    };
  }, [status]);

  const onSubmit = (values) => {
    const result = {
      name: values.name,
      preparation_time: values.preparation_time,
      type: values.type,
      ...additionalValues(values),
    };

    const sendRequest = fetch(
      'https://frosty-wood-6558.getsandbox.com:443/dishes',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...result }),
      }
    )
      .then((res) => {
        if (res.ok) {
          reset();
          return res.json();
        }
        throw new SubmissionError('🚫 Something went wrong!');
      })
      .then((res) => {
        console.log(res);
        setFetchStatus({
          status: true,
          message: '✅ Your order has been send!',
        });
      })
      .catch((err) => {
        console.log(err);
        setFetchStatus({
          status: false,
          message: err.errors,
        });
      });

    return sendRequest;
  };

  return (
    <FormStyles onSubmit={handleSubmit(onSubmit)}>
      {status !== null && <DisplayMessage status={status} message={message} />}
      <fieldset aria-busy={submitting}>
        <Label htmlFor="name">
          Dish Name
          <Field
            component={renderField}
            type="text"
            name="name"
            id="name"
            placeholder="Dish name..."
          />
        </Label>
        <Label>
          Preparation Time
          <Field
            component={renderField}
            type="time"
            name="preparation_time"
            id="preparation_time"
            step={1}
          />
        </Label>
        <Label>
          Type
          {whatType && <span className="success">✅</span>}
          <ul className="select">
            <li>
              <Field
                component="input"
                type="radio"
                name="type"
                id="pizza"
                value="pizza"
              />
              <label htmlFor="pizza">pizza 🍕</label>
            </li>
            <li>
              <Field
                component="input"
                type="radio"
                name="type"
                id="soup"
                value="soup"
              />
              <label htmlFor="soup">soup 🍜"</label>
            </li>
            <li>
              <Field
                component="input"
                type="radio"
                name="type"
                id="sandwich"
                value="sandwich"
              />
              <label htmlFor="sandwich">sandwich 🥪</label>
            </li>
          </ul>
        </Label>
        {whatType && <AdditionalFormFields title={whatType} />}
        <button type="submit">Send</button>
      </fieldset>
    </FormStyles>
  );
};

Form = reduxForm({
  form: 'order',
  initialValues: INITIAL_FORM_VALUES,
  validate,
})(Form);

const selector = formValueSelector('order');
Form = connect((state) => {
  const whatType = selector(state, 'type');
  return {
    whatType,
  };
})(Form);

export default Form;

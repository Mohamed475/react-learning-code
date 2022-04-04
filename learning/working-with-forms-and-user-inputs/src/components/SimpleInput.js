import { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // Get the entered value.
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);

    if (e.target.value.trim() !== '') {
      setEnteredNameIsValid(true);
    }
  };

  // Fire-up when the input lost focus.
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);

    // Check if the input is true or not when the user is our of focus.
    if (e.target.value.trim() === '') {
      return setEnteredNameIsValid(false);
    }

    setEnteredNameIsValid(true);
  };

  // Get the submitted name.
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    // Touched.
    setEnteredNameTouched(true);

    // Validate.
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    // Update the validation.
    setEnteredNameIsValid(true);

    console.log('-----------------');
    console.log(enteredName);
    console.log('-----------------');

    // Clear inputs.
    setEnteredName('');

    // Reset the touch and validation.
    setEnteredNameTouched(false);
    setEnteredNameIsValid(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div
        className={`form-control ${
          !enteredNameIsValid && enteredNameTouched && 'invalid'
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
        />
        {!enteredNameIsValid && enteredNameTouched && (
          <p className="error-text">Name field is required!</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

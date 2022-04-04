import React, { useRef } from 'react';

const Product = (props) => {
  const name = useRef('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Send it to the parent.
    // Through execute this function.
    props.onAddName(name.current.value);

    name.current.value = '';
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Name:
        <input type="text" name="name" value={name.current.value} ref={name} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Product;

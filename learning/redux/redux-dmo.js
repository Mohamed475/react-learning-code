const { createStore } = require('redux');

// The executer of any action you wanna do.
const counterReducer = (oldState = { counter: 0 }, action) => {
  if (action.type === 'inc') {
    return {
      counter: oldState.counter + 1,
    };
  }
  if (action.type === 'dec') {
    return {
      counter: oldState.counter - 1,
    };
  }

  return {
    counter: oldState.counter,
  };
};

// Reflect all updates.
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// Creating the store.
let store = createStore(counterReducer);

// Subscript.
// The output.
store.subscribe(counterSubscriber);

// Action.
store.dispatch({ type: 'inc' });
store.dispatch({ type: 'inc' });
store.dispatch({ type: 'dec' });

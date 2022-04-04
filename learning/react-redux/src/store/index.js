import { createStore } from 'redux';
import { createSlice, createReducer, configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';

// Create the store.
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});
// const store = configureStore({
//   reducer: counterSlice.reducer,
// });
// const store = createStore(counterSlice.reducer);

// Export it.
export default store;

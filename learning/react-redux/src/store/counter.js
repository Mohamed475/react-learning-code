import { createSlice, createReducer, configureStore } from '@reduxjs/toolkit';

const counterInitialState = { counter: 0, isCounterOpen: true };

// Counter slice.
const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.isCounterOpen = !state.isCounterOpen;
    },
  },
});

// Export counter actions.
export const counterActions = counterSlice.actions;

// Export counter reducer.
export default counterSlice.reducer;

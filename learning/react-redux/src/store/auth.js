import { createSlice, createReducer, configureStore } from '@reduxjs/toolkit';

const authInitialState = { isAuth: false };

// Authntication slice.
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

// Export auth actions.
export const authActions = authSlice.actions;

// Export auth reducer.
export default authSlice.reducer;

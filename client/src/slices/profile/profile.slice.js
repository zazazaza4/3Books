import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: true
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: 'profile',
  reducers: {}
});

export { actions, name, reducer };

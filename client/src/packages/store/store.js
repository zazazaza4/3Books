import { configureStore } from '@reduxjs/toolkit';

import { reducer as profileReducer } from '~/slices/profile/profile.js';

const store = configureStore({
  reducer: {
    profile: profileReducer
  }
});

export { store };

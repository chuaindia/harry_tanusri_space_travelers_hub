import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';

export default configureStore({
  reducer: {

    rocket: rocketsReducer,
  },
});

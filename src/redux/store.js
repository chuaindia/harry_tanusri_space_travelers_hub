import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/mission.redux';
import rocketsReducer from './rockets/rockets';

// Reducers

export default configureStore({
  reducer: {
    mission: missionReducer,
    rocket: rocketsReducer,
  },
});

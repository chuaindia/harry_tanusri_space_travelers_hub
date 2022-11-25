import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/mission.redux';
import rocketReducer from './rockets/rockets';

// Reducers

export default configureStore({
  reducer: {
    mission: missionReducer,
    rocket: rocketReducer,
  },
});

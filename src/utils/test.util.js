/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import missionReducer from '../redux/mission/mission.redux';

const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    store = configureStore({ reducer: { mission: missionReducer }, preloadedState }),
    ...renderOptions
  } = {},
) => {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;

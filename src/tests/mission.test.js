/* eslint-disable max-len */
import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderWithProviders from '../utils/test.util';
import Mission from '../components/mission';

describe('test for mission component', () => {
  test('renders mission component', () => {
    expect(renderWithProviders(<Mission description="some text here" reserved={false} missionName="name" missionId="FA1" />)).toMatchSnapshot();
  });

  test('displays the right button conditionally using reserved prop', () => {
    renderWithProviders(<Mission description="description" reserved={false} missionName="Space" missionId="FAD123" />);

    expect(screen.queryByText(/Not a member/i)).not.toBeNull();
    expect(screen.queryByText(/Active member/i)).toBeNull();
  });

  it('should listen to number of button click', () => {
    renderWithProviders(<Mission description="description" reserved={false} missionName="Space" missionId="FAD123" />);

    expect(screen.queryByText(/Space/i)).not.toBeNull();
    expect(screen.queryByText(/description/i)).not.toBeNull();
  });
});

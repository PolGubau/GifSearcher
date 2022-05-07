

import React from 'react'
import {screen, render} from '@testing-library/react';
import App from '../App';




test('App working (title shown)', async() => {
  const {findByText}=render(<App />);
  const welcomeElement = await screen.findByText(/Iván's Gifs/i);
  expect(welcomeElement).toBeInTheDocument();
});

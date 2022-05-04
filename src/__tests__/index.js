

import React from 'react'
import { render} from '@testing-library/react';
import App from '../App';




test('App working (title shown)', () => {
  const {getByText}=render(<App />);
  const welcomeElement = getByText(/Iván's Gifs/i);
  expect(welcomeElement).toBeInTheDocument();
});
test('Home working as expected', () => {
  const {getByText}=render(<App />);
  const welcomeElement = getByText(/Iván's Gifs/i);
  expect(welcomeElement).toBeInTheDocument();
});


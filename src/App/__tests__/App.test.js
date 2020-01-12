import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

// TODO: Learn how to test React components,
// then update this test.
test.skip('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

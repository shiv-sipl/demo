import React from 'react';
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import MyComponent from '../src/MyComponent';

test('renders message', () => {
  const { getByText } = render(<MyComponent message="Hello World" />);
  expect(getByText('Hello World')).toBeInTheDocument();
});

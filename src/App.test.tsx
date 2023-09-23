import { render, screen } from '@testing-library/react';
import { describe, it } from 'bun:test';
import React from 'react';

import App from './App';

describe('test', () => {
  it('should render welcome message', () => {
    render(<App />);
    screen.debug();
    screen.getByText(/Welcome to React!/i);
  })
})
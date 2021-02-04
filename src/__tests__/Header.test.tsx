
/* TDD - Components testing */

import React from 'react';
import { render, screen } from "@testing-library/react";
import Header from '../components/Header/Header';

describe('<Header />', () => {
  it('renders the header text', () => {
    render(<Header />);
    expect(screen.getByText(/Weather Widget/i)).toBeInTheDocument();
  });
});
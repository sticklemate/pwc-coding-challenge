
/* TDD - Components testing */

import React from 'react';
import { render, screen } from "@testing-library/react";
import Footer from '../components/Footer/Footer';

describe('<Footer />', () => {
  it('renders the attribution text', () => {
    render(<Footer />);
    expect(screen.getByText(/OpenWeatherMap/i)).toBeInTheDocument();
  });
});
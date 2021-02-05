import React from 'react';
import { FooterContainer } from './styled';

/**
 * Renders attribution text for weather data in the Footer Component
 */

const Footer: React.FC = () => {
  return (
    <FooterContainer> 
      <p>
      Weather data by OpenWeatherMap
      </p>
    </FooterContainer>
  );
};

export default Footer;

import React from 'react';
import { HeaderContainer, Title, HeaderIconsContainer } from './styled';

/**
 * Renders Weather Title for weather widget in the Header component
 */

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Weather Widget</Title>
      <HeaderIconsContainer/>
    </HeaderContainer>
  );
};

export default Header;

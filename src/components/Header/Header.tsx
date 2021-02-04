import React from 'react';
import { HeaderContainer, Title, HeaderIconsContainer } from './styled';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Weather Widget</Title>
      <HeaderIconsContainer/>
    </HeaderContainer>
  );
};

export default Header;

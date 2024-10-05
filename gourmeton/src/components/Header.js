// Header.js
import React from 'react';
import styled from 'styled-components';
import { useWindowScroll } from 'react-use';
import { Link } from 'react-scroll';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fffaf0; /* Cor creme */
  transition: opacity 0.5s;
  opacity: ${({ opacity }) => opacity};
  z-index: 1000;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
`;

const AppName = styled.h1`
  color: #ff6347; /* Vermelho tomate */
  margin: 0;
  font-size: 1.5rem;
`;

const NavMenu = styled.nav`
  margin-left: auto;
  display: flex;
`;

const NavItem = styled(Link)`
  margin-left: 2rem;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #ff6347;
  }
`;

const Header = () => {
  const { y: scrollY } = useWindowScroll();
  const newOpacity = Math.max(1 - scrollY / 200, 0.7);

  return (
    <HeaderContainer opacity={newOpacity}>
      <HeaderContent>
        <AppName>GourmetOn</AppName>
        <NavMenu>
          <NavItem to="main" smooth={true} duration={500}>
            Início
          </NavItem>
          {/* Você pode adicionar mais itens de navegação aqui */}
        </NavMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

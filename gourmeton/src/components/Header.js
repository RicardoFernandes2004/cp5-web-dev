import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import styled from 'styled-components';

// Styled Components

// Container do Header com estilização personalizada
const StyledNavbar = styled(Navbar)`
  background-color: #fffaf0 !important; /* Cor creme */
  transition: opacity 0.5s, box-shadow 0.3s;
  opacity: ${({ opacity }) => opacity};
  box-shadow: ${({ opacity }) => (opacity < 1 ? '0 2px 4px rgba(0,0,0,0.1)' : 'none')};
`;

// Estilização dos Links de Navegação
const StyledNavLink = styled(ScrollLink)`
  color: #000 !important; /* Cor preta */
  margin-left: 1rem;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none !important; /* Remove underline */
  transition: color 0.2s;

  &:hover {
    color: #ff6347 !important; /* Vermelho tomate no hover */
    text-decoration: none !important; /* Garante que não haja underline no hover */
  }

  &.active {
    color: #ff6347 !important; /* Vermelho tomate quando ativo */
  }
`;

const Header = () => {
  // Estado para controlar a opacidade do header baseado no scroll
  const [opacity, setOpacity] = useState(1);

  // Função para atualizar a opacidade com base no scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newOpacity = Math.max(1 - scrollY / 300, 0);
    setOpacity(newOpacity);
  };

  // Adiciona o event listener para o scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <StyledNavbar expand="lg" fixed="top" opacity={opacity}>
      <Container>
        <Navbar.Brand style={{ color: '#ff6347', fontSize: '1.5rem', cursor: 'pointer' }}>
          <ScrollLink 
            to="main" 
            smooth={true} 
            duration={500} 
            offset={-70}
            style={{ textDecoration: 'none', color: '#ff6347' }}
          >
            GourmetOn
          </ScrollLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Classe 'ms-auto' alinha os itens à direita no Bootstrap 5 */}
          {/* Use 'ml-auto' se estiver usando Bootstrap 4 */}
          <Nav className="ms-auto">
            <StyledNavLink
              to="main"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              exact="true"
              activeClass="active"
            >
              Início
            </StyledNavLink>
            <StyledNavLink
              to="features"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              exact="true"
              activeClass="active"
            >
              Funcionalidades
            </StyledNavLink>
            <StyledNavLink
              to="recipe-search"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              exact="true"
              activeClass="active"
            >
              Buscar Receitas
            </StyledNavLink>
            <StyledNavLink
              to="recipe-carousel"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              exact="true"
              activeClass="active"
            >
              Receitas
            </StyledNavLink>
            <StyledNavLink
              to="testimonials"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              exact="true"
              activeClass="active"
            >
              Depoimentos
            </StyledNavLink>
            <StyledNavLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              spy={true}
              exact="true"
              activeClass="active"
            >
              Contato
            </StyledNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Header;

// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Styled Components
const FooterContainer = styled.footer`
  background-color: #ff6347; /* Vermelho tomate */
  color: #fffaf0; /* Cor creme */
  padding: 2rem 0;
  margin-top: 4rem;
`;

const FooterTitle = styled.h5`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #fffaf0;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;

  &:hover {
    color: #ffe5d9; /* Tom suave para hover */
  }
`;

const SocialIcon = styled(FontAwesomeIcon)`
  color: #fffaf0;
  font-size: 1.5rem;
  margin-right: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #ffe5d9;
  }
`;

const CopyRight = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Row>
          {/* Sobre Nós */}
          <Col md={3} sm={6} xs={12} className="mb-4">
            <FooterTitle>Sobre Nós</FooterTitle>
            <FooterLink href="#">Nossa História</FooterLink>
            <FooterLink href="#">Missão & Visão</FooterLink>
            <FooterLink href="#">Equipe</FooterLink>
          </Col>

          {/* Links Úteis */}
          <Col md={3} sm={6} xs={12} className="mb-4">
            <FooterTitle>Links Úteis</FooterTitle>
            <FooterLink href="#">Política de Privacidade</FooterLink>
            <FooterLink href="#">Termos de Uso</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
          </Col>

          {/* Redes Sociais */}
          <Col md={3} sm={6} xs={12} className="mb-4">
            <FooterTitle>Siga-nos</FooterTitle>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={['fab', 'facebook-f']} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={['fab', 'twitter']} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={['fab', 'instagram']} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon icon={['fab', 'linkedin-in']} />
            </a>
          </Col>

          {/* Contato */}
          <Col md={3} sm={6} xs={12} className="mb-4">
            <FooterTitle>Contato</FooterTitle>
            <p>Email: contato@gourmeton.com</p>
            <p>Telefone: (11) 99999-9999</p>
            <p>Endereço: Rua Exemplo, 123, São Paulo - SP</p>
          </Col>
        </Row>
        <CopyRight>&copy; {new Date().getFullYear()} GourmetOn. Todos os direitos reservados.</CopyRight>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

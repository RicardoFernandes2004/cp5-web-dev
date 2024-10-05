// src/components/Features.js
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Importação de imagem placeholder (opcional)
import appImage from '../assets/app-placeholder.png'; // Substitua pelo caminho correto ou utilize um link

const FeaturesContainer = styled.section`
  background-color: #fffaf0; /* Cor creme */
  color: #000;
  padding: 4rem 2rem;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #ff6347; /* Vermelho tomate */
  text-align: center;

  @media(max-width: 768px) {
    font-size: 2rem;
  }
`;

const FeatureCard = styled(Card)`
  border: none;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #ff6347;
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #ff6347;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #333;
`;

const Features = () => {
  return (
    <FeaturesContainer id='features'>
      <Container>
        <Title>Nossas Funcionalidades</Title>
        <Row>
          <Col md={4} sm={6} xs={12} className="mb-4">
            <FeatureCard data-aos="fade-up">
              <Card.Body className="text-center">
                <FeatureIcon>
                  <FontAwesomeIcon icon="utensils" />
                </FeatureIcon>
                <FeatureTitle>Receitas Incríveis</FeatureTitle>
                <FeatureDescription>
                  Encontre uma vasta seleção de receitas para todos os gostos e ocasiões.
                </FeatureDescription>
              </Card.Body>
            </FeatureCard>
          </Col>

          <Col md={4} sm={6} xs={12} className="mb-4">
            <FeatureCard data-aos="fade-up" data-aos-delay="100">
              <Card.Body className="text-center">
                <FeatureIcon>
                  <FontAwesomeIcon icon="list-ul" />
                </FeatureIcon>
                <FeatureTitle>Lista de Compras</FeatureTitle>
                <FeatureDescription>
                  Gere listas de compras automaticamente com base nas suas receitas selecionadas.
                </FeatureDescription>
              </Card.Body>
            </FeatureCard>
          </Col>

          <Col md={4} sm={6} xs={12} className="mb-4">
            <FeatureCard data-aos="fade-up" data-aos-delay="200">
              <Card.Body className="text-center">
                <FeatureIcon>
                  <FontAwesomeIcon icon="share-alt" />
                </FeatureIcon>
                <FeatureTitle>Compartilhamento Fácil</FeatureTitle>
                <FeatureDescription>
                  Compartilhe suas receitas favoritas com amigos e familiares em apenas um clique.
                </FeatureDescription>
              </Card.Body>
            </FeatureCard>
          </Col>

          {/* Funcionalidade Adicional */}
          <Col md={4} sm={6} xs={12} className="mb-4">
            <FeatureCard data-aos="fade-up" data-aos-delay="300">
              <Card.Body className="text-center">
                <FeatureIcon>
                  <FontAwesomeIcon icon="book" />
                </FeatureIcon>
                <FeatureTitle>Gestão de Receitas</FeatureTitle>
                <FeatureDescription>
                  Organize suas receitas favoritas em categorias personalizadas para fácil acesso.
                </FeatureDescription>
              </Card.Body>
            </FeatureCard>
          </Col>

          {/* Outra Funcionalidade Adicional */}
          <Col md={4} sm={6} xs={12} className="mb-4">
            <FeatureCard data-aos="fade-up" data-aos-delay="400">
              <Card.Body className="text-center">
                <FeatureIcon>
                  <FontAwesomeIcon icon="shopping-cart" />
                </FeatureIcon>
                <FeatureTitle>Compras Integradas</FeatureTitle>
                <FeatureDescription>
                  Integre suas listas de compras diretamente com lojas online para facilitar suas compras.
                </FeatureDescription>
              </Card.Body>
            </FeatureCard>
          </Col>

          {/* Mais uma Funcionalidade */}
          <Col md={4} sm={6} xs={12} className="mb-4">
            <FeatureCard data-aos="fade-up" data-aos-delay="500">
              <Card.Body className="text-center">
                <FeatureIcon>
                  <FontAwesomeIcon icon="users" />
                </FeatureIcon>
                <FeatureTitle>Comunidade GourmetOn</FeatureTitle>
                <FeatureDescription>
                  Participe de uma comunidade ativa para compartilhar e descobrir novas receitas.
                </FeatureDescription>
              </Card.Body>
            </FeatureCard>
          </Col>
        </Row>
      </Container>
    </FeaturesContainer>
  );
};

export default Features;

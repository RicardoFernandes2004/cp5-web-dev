// src/components/AppPresentation.js
import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PresentationSection = styled.section`
  padding: 4rem 0;
  background-color: #fffaf0; /* Cor creme */
`;

const PresentationTitle = styled.h2`
  font-size: 2.5rem;
  color: #ff6347; /* Vermelho tomate */
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PresentationSubtitle = styled.p`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FeaturesList = styled.div`
  margin-bottom: 3rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  color: #ff6347;
  margin-right: 1rem;

  @media (max-width: 576px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`;

const FeatureText = styled.div`
  font-size: 1.2rem;
  color: #333;
`;

const DownloadButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AppPresentation = () => {
  return (
    <PresentationSection id="app-presentation">
      <Container>
        <PresentationTitle>O GourmetOn</PresentationTitle>
        <PresentationSubtitle>
          Seu guia definitivo para receitas deliciosas e gerenciamento de cozinha
        </PresentationSubtitle>

        <FeaturesList>
          <FeatureItem>
            <FeatureIcon>
              <FontAwesomeIcon icon="utensils" />
            </FeatureIcon>
            <FeatureText>
              <strong>Receitas Variadas:</strong> Encontre uma vasta seleção de receitas para todos os gostos e ocasiões.
            </FeatureText>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon>
              <FontAwesomeIcon icon="list-ul" />
            </FeatureIcon>
            <FeatureText>
              <strong>Lista de Compras Inteligente:</strong> Gere listas de compras automaticamente com base nas suas receitas selecionadas.
            </FeatureText>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon>
              <FontAwesomeIcon icon="share-alt" />
            </FeatureIcon>
            <FeatureText>
              <strong>Compartilhamento Fácil:</strong> Compartilhe suas receitas favoritas com amigos e familiares em apenas um clique.
            </FeatureText>
          </FeatureItem>
        </FeaturesList>

        <DownloadButtons>
          <a href="#download" className="btn btn-danger btn-lg">
            <FontAwesomeIcon icon="apple-alt" /> Download para iOS
          </a>
          <a href="#download" className="btn btn-danger btn-lg">
            <FontAwesomeIcon icon="android" /> Download para Android
          </a>
        </DownloadButtons>
      </Container>
    </PresentationSection>
  );
};

export default AppPresentation;

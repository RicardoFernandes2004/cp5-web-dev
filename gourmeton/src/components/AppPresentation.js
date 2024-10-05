import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStoreIos, faAndroid } from '@fortawesome/free-brands-svg-icons';

const PresentationSection = styled.section`
  padding: 4rem 0;
  background-color: #fffaf0; /* Cor creme */
`;

const PresentationTitle = styled.h2`
  font-size: 2.5rem;
  color: #ff6347; /* Vermelho tomate */
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PresentationText = styled.p`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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
        <PresentationTitle>o GourmetOn</PresentationTitle>
        <PresentationText>
          Descubra receitas incríveis, gerencie suas listas de compras e muito mais com o GourmetOn. Nosso aplicativo está disponível para dispositivos Android e iOS, oferecendo uma experiência intuitiva e deliciosa para todos os amantes da gastronomia.
        </PresentationText>
        <DownloadButtons>
          <Button variant="danger" href="#download">
            <FontAwesomeIcon icon={faAppStoreIos} /> Download para iOS
          </Button>
          <Button variant="danger" href="#download">
            <FontAwesomeIcon icon={faAndroid} /> Download para Android
          </Button>
        </DownloadButtons>
      </Container>
    </PresentationSection>
  );
};

export default AppPresentation;

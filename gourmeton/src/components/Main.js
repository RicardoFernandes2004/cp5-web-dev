// Main.js
import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const MainContainer = styled.main`
  position: relative;
  display: grid;
  align-items: center;       /* Centraliza verticalmente */
  justify-items: start;      /* Alinha à esquerda horizontalmente */
  height: 100vh;
  background-image: url(${props => props.bgImage});
  background-attachment: fixed; /* Faz o background ficar fixo */
  background-size: cover;
  background-position: center;
  color: #000;
  padding: 0 2rem;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5); /* Overlay escuro */
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const Content = styled.div`
  z-index: 1;
  max-width: 400px;
  background-color: transparent;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const DownloadButton = styled.a`
  background-color: #ff6347; /* Vermelho tomate */
  color: #fff;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.2rem;
  display: inline-block;

  &:hover {
    background-color: #e5533d;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const Main = ({ bgImage }) => {
  return (
    <Element name="main">
      <MainContainer bgImage={bgImage}>
        <Content>
          <Title>Descubra o Sabor da GourmetOn</Title>
          <Description>
            O aplicativo que traz as melhores receitas para a sua mesa.
          </Description>
          <DownloadButton href="#download">
            <FontAwesomeIcon icon={faDownload} /> Baixar Agora
          </DownloadButton>
        </Content>
      </MainContainer>
    </Element>
  );
};

export default Main;

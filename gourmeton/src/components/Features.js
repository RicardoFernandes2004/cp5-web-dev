import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.section`
  position: relative;
  background-color: #fffaf0; /* Cor creme */
  color: #000;
  padding: 4rem 2rem;
  z-index: 2; /* Maior que o z-index da Main */
  opacity: 0;
  animation: fadeIn 1s forwards;
  animation-delay: 0.3s;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ff6347; /* Vermelho tomate */
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
`;

const Features = () => {
  return (
    <FeaturesContainer>
      <Title>Nossas Funcionalidades</Title>
      <FeatureList>
        <FeatureItem>
          <h3>Receitas Incríveis</h3>
          <p>Encontre as melhores receitas para todos os gostos.</p>
        </FeatureItem>
        <FeatureItem>
          <h3>Lista de Compras</h3>
          <p>Crie e gerencie suas listas de compras facilmente.</p>
        </FeatureItem>
        {/* Adicione mais itens conforme necessário */}
      </FeatureList>
    </FeaturesContainer>
  );
};

export default Features;

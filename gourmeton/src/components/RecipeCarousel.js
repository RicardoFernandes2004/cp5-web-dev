import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Button, Carousel, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CarouselContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa; /* Cor de fundo suave */
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-right: 2rem;

  @media(max-width: 768px) {
    align-items: center;
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  color: #ff6347; /* Vermelho tomate */
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 2rem;
`;

const CTAButton = styled(Button)`
  background-color: #ff6347;
  border: none;

  &:hover {
    background-color: #e5533d;
  }
`;

const RecipeCarousel = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const API_KEY = '2e4c1a1a557b4d23b158e67f34c1021f'; // Substitua pela sua chave de API se for testar

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/random`,
          {
            params: {
              number: 6, 
              apiKey: API_KEY,
            },
          }
        );
        setRecipes(response.data.recipes);
        setLoading(false);
      } catch (err) {
        console.error('Erro ao buscar receitas:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [API_KEY]);

  return (
    <CarouselContainer id="recipe-carousel">
      <Container>
        <Row className="align-items-center">
          <Col md={6} sm={12}>
            <CTAContainer>
              <CTATitle>Descubra Receitas Deliciosas</CTATitle>
              <CTADescription>
                Explore uma variedade de receitas selecionadas para você. Transforme sua experiência culinária com o GourmetOn.
              </CTADescription>
              <CTAButton variant="danger" href="#app-presentation">
                Veja Mais Receitas <FontAwesomeIcon icon="arrow-right" />
              </CTAButton>
            </CTAContainer>
          </Col>
          <Col md={6} sm={12}>
            {loading ? (
              <div className="text-center">
                <Spinner animation="border" role="status">
                  <span className="sr-only">Carregando...</span>
                </Spinner>
              </div>
            ) : error ? (
              <Alert variant="danger">
                Ocorreu um erro ao carregar as receitas. Por favor, tente novamente mais tarde.
              </Alert>
            ) : (
              <Carousel>
                {recipes.map((recipe) => (
                  <Carousel.Item key={recipe.id}>
                    <img
                      className="d-block w-100"
                      src={recipe.image}
                      alt={recipe.title}
                      style={{ borderRadius: '8px', maxHeight: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                      <h3>{recipe.title}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))}
              </Carousel>
            )}
          </Col>
        </Row>
      </Container>
    </CarouselContainer>
  );
};

export default RecipeCarousel;

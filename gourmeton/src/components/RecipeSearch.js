// src/components/RecipeSearch.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  Container, 
  Form, 
  Button, 
  Row, 
  Col, 
  Card, 
  Spinner, 
  Alert, 
  Modal 
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'; // Certifique-se de instalar o axios: npm install axios

// Styled Components
const SearchSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa; /* Cor de fundo suave */
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ff6347; /* Vermelho tomate */
  text-align: center;

  @media(max-width: 768px) {
    font-size: 2rem;
  }
`;

const RecipeCard = styled(Card)`
  margin-bottom: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const RecipeImage = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
`;

const RecipeTitle = styled(Card.Title)`
  font-size: 1.25rem;
  color: #ff6347;
  text-align: center;
`;

const ViewButton = styled(Button)`
  background-color: #ff6347;
  border: none;
  width: 100%;
  margin-top: auto; /* Empurra o botão para o final do card */

  &:hover {
    background-color: #e5533d;
  }
`;

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setRecipes([]);

    try {
      // Substitua 'YOUR_API_KEY' pela sua chave da API de receitas
      const API_KEY = '2e4c1a1a557b4d23b158e67f34c1021f';
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          query: query,
          number: 12, // Número de receitas a serem retornadas
          apiKey: API_KEY,
          addRecipeInformation: false, // Não adiciona informações detalhadas
        },
      });

      setRecipes(response.data.results);
    } catch (err) {
      console.error(err);
      setError('Ocorreu um erro ao buscar as receitas. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetails = async (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
    setRecipeDetails(null);
    setDetailsLoading(true);
    setDetailsError(null);

    try {
      const API_KEY = '2e4c1a1a557b4d23b158e67f34c1021f';
      const response = await axios.get(`https://api.spoonacular.com/recipes/${recipe.id}/information`, {
        params: {
          apiKey: API_KEY,
          includeNutrition: false,
        },
      });

      setRecipeDetails(response.data);
    } catch (err) {
      console.error(err);
      setDetailsError('Ocorreu um erro ao buscar os detalhes da receita.');
    } finally {
      setDetailsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedRecipe(null);
    setRecipeDetails(null);
    setDetailsLoading(false);
    setDetailsError(null);
  };

  return (
    <SearchSection id="recipe-search">
      <Container>
        <Title>Buscar Receitas</Title>
        <Form onSubmit={handleSubmit}>
          <Row className="align-items-center">
            <Col md={10} sm={9} xs={12} className="mb-2">
              <Form.Control
                type="text"
                placeholder="Digite uma receita..."
                value={query}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={2} sm={3} xs={12} className="mb-2">
              <Button variant="primary" type="submit" className="w-100">
                <FontAwesomeIcon icon="search" /> Buscar
              </Button>
            </Col>
          </Row>
        </Form>

        {loading && (
          <div className="text-center my-4">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Carregando...</span>
            </Spinner>
          </div>
        )}

        {error && (
          <Alert variant="danger" className="mt-4">
            {error}
          </Alert>
        )}

        <Row className="mt-4">
          {recipes.map((recipe) => (
            <Col key={recipe.id} md={4} sm={6} xs={12}>
              <RecipeCard>
                <RecipeImage 
                  variant="top" 
                  src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`} 
                  alt={recipe.title} 
                  loading="lazy" 
                />
                <Card.Body className="d-flex flex-column">
                  <RecipeTitle>{recipe.title}</RecipeTitle>
                  <ViewButton 
                    variant="primary" 
                    onClick={() => handleViewDetails(recipe)}
                  >
                    Ver Receita
                  </ViewButton>
                </Card.Body>
              </RecipeCard>
            </Col>
          ))}
        </Row>

        {/* Modal para Detalhes da Receita */}
        <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedRecipe ? selectedRecipe.title : 'Detalhes da Receita'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {detailsLoading && (
              <div className="text-center my-4">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </Spinner>
              </div>
            )}

            {detailsError && (
              <Alert variant="danger">
                {detailsError}
              </Alert>
            )}

            {recipeDetails && (
              <Row>
                <Col md={4} sm={12} className="mb-3">
                  <img 
                    src={recipeDetails.image} 
                    alt={recipeDetails.title} 
                    className="img-fluid rounded" 
                    loading="lazy"
                  />
                </Col>
                <Col md={8} sm={12}>
                  <h4>Resumo</h4>
                  <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></p>
                  <h5>Instruções</h5>
                  {recipeDetails.instructions ? (
                    <div dangerouslySetInnerHTML={{ __html: recipeDetails.instructions }}></div>
                  ) : (
                    <p>Não há instruções disponíveis para esta receita.</p>
                  )}
                  <h5>Link da Receita</h5>
                  <a href={recipeDetails.sourceUrl} target="_blank" rel="noopener noreferrer">
                    Visitar Site da Receita
                  </a>
                </Col>
              </Row>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </SearchSection>
  );
};

export default RecipeSearch;

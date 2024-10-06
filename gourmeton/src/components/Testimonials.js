import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const depoimentos = [
  {
    id: 1,
    nome: 'Ana Silva',
    cargo: 'Chef de Cozinha',
    foto: 'https://randomuser.me/api/portraits/women/44.jpg',
    texto: 'O GourmetOn transformou minha maneira de organizar as receitas. Agora, tudo está à mão e de forma super prática!',
    avaliacao: 5,
  },
  {
    id: 2,
    nome: 'Carlos Pereira',
    cargo: 'Entusiasta da Culinária',
    foto: 'https://randomuser.me/api/portraits/men/46.jpg',
    texto: 'Adoro a variedade de receitas disponíveis. Sempre encontro algo novo e delicioso para preparar.',
    avaliacao: 4,
  },
  {
    id: 3,
    nome: 'Mariana Costa',
    cargo: 'Influencer de Gastronomia',
    foto: 'https://randomuser.me/api/portraits/women/68.jpg',
    texto: 'O design intuitivo do aplicativo facilita muito o gerenciamento das minhas receitas e listas de compras.',
    avaliacao: 5,
  },
  // Adicione mais depoimentos conforme necessário
];

// Styled Components
const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f8f9fa; /* Cor de fundo suave */
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

const TestimonialCard = styled(Card)`
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const UserPhoto = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin: 1rem auto 0;
`;

const UserName = styled.h5`
  font-size: 1.2rem;
  color: #ff6347;
  text-align: center;
  margin-top: 0.5rem;
`;

const UserCargo = styled.p`
  font-size: 0.9rem;
  color: #6c757d;
  text-align: center;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #333;
  text-align: center;
  padding: 0 1rem;
`;

const Avaliacao = styled.div`
  text-align: center;
  margin-top: 1rem;
  color: #ffc107; /* Cor das estrelas */
`;

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <Title>O que dizem sobre o GourmetOn</Title>
        <Row>
          {depoimentos.map((depoimento) => (
            <Col key={depoimento.id} md={4} sm={6} xs={12} className="mb-4">
              <TestimonialCard>
                <UserPhoto src={depoimento.foto} alt={`${depoimento.nome} foto`} loading="lazy" />
                <UserName>{depoimento.nome}</UserName>
                <UserCargo>{depoimento.cargo}</UserCargo>
                <TestimonialText>"{depoimento.texto}"</TestimonialText>
                <Avaliacao>
                  {[...Array(depoimento.avaliacao)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon="star" />
                  ))}
                  {[...Array(5 - depoimento.avaliacao)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={['far', 'star']} />
                  ))}
                </Avaliacao>
              </TestimonialCard>
            </Col>
          ))}
        </Row>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials;

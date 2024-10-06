import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background-color: #fffaf0; /* Cor creme */
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

const StyledForm = styled(Form)`
  max-width: 600px;
  margin: 0 auto;
`;

const SubmitButton = styled(Button)`
  background-color: #ff6347;
  border: none;
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;

  &:hover {
    background-color: #e5533d;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' ou 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nome é obrigatório.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido.';
    }
    if (!formData.message.trim()) newErrors.message = 'Mensagem é obrigatória.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Resetar erros
    setErrors({});
    setSubmitStatus(null);

    // Configurações do EmailJS
    const serviceID = 'service_sea7an5';
    const templateID = 'template_njxvs5k';
    const userID = 'Ricardo';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, (err) => {
        console.log('FAILED...', err);
        setSubmitStatus('error');
      });
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Title>Contato</Title>
        <StyledForm onSubmit={handleSubmit}>
          {submitStatus === 'success' && (
            <Alert variant="success">Mensagem enviada com sucesso!</Alert>
          )}
          {submitStatus === 'error' && (
            <Alert variant="danger">Ocorreu um erro ao enviar a mensagem. Tente novamente.</Alert>
          )}
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formSubject" className="mb-3">
            <Form.Label>Assunto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Assunto da mensagem"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formMessage" className="mb-3">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Digite sua mensagem"
              name="message"
              value={formData.message}
              onChange={handleChange}
              isInvalid={!!errors.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>

          <SubmitButton variant="primary" type="submit">
            Enviar
          </SubmitButton>
        </StyledForm>
      </Container>
    </ContactSection>
  );
};

export default Contact;

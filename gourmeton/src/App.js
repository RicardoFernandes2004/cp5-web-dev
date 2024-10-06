import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
import AppPresentation from './components/AppPresentation';
import RecipeCarousel from './components/RecipeCarousel';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import './Icons'; 
import GlobalStyle from './GlobalStyles';

const App = () => {
  const backgroundImageUrl = 'https://sagourmetfoodco.com.au/wp-content/uploads/2021/05/SAGFC-004-Spaghetti-Bolognese.jpg'; // Substitua pela URL da sua imagem

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main bgImage={backgroundImageUrl} />
      <AppPresentation />
      <Features />
      <RecipeCarousel />
      <Testimonials />
      <Contact/>
      <Footer />
      
    </>
  );
};

export default App;

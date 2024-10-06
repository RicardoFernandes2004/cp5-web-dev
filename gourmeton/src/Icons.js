// src/icons.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faDownload, 
  faUtensils, 
  faListUl, 
  faShareAlt, 
  faBook, 
  faShoppingCart, 
  faUsers, 
  faArrowRight,
  faSearch,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { 
  faFacebookF, 
  faTwitter, 
  faInstagram, 
  faLinkedinIn,
  faAppStore, 
  faAndroid 
} from '@fortawesome/free-brands-svg-icons';

// Adicionando os ícones à biblioteca
library.add(
  faDownload, 
  faAppStore, 
  faAndroid, 
  faUtensils, 
  faListUl, 
  faShareAlt, 
  faBook, 
  faShoppingCart, 
  faUsers,
  faArrowRight,
  faSearch,
  faStar,        // Estrelas preenchidas
  farStar,       // Estrelas vazias (Font Awesome Regular)
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
);

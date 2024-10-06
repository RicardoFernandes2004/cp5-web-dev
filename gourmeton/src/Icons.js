// src/icons.js
import { library } from '@fortawesome/fontawesome-svg-core';

// Ícones sólidos (free-solid-svg-icons)
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

// Ícones regulares (free-regular-svg-icons)
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

// Ícones de marcas (free-brands-svg-icons)
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
  // Ícones sólidos
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

  // Ícones regulares
  farStar,

  // Ícones de marcas
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faAppStore, 
  faAndroid
);

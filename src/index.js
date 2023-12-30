// src/index.js

import './css/main.css';
import HomePage from './components/homepage';

// Function to render the home page component
const renderHomePage = () => {
  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.innerHTML = HomePage;
  }
};

// Initial render
renderHomePage();

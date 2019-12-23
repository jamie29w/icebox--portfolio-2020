import React from 'react';
import { Router } from '@reach/router';

import HomeView from './home/HomeView';
import NowView from './now/NowView';
import PortfolioView from './portfolio/PortfolioView';

import './styles/App.scss';
import './index.scss';

export default function App() {
  return (
    <Router>
      <HomeView default path='/' />
      <NowView path='/now' />
      <PortfolioView path='/portfolio' />
    </Router>
  );
}

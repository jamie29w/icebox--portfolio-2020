import React from 'react';
import { Router } from '@reach/router';

import HomeView from './components/home/HomeView';
import NowView from './components/now/NowView';
import PortfolioView from './components/portfolio/PortfolioView';

import './App.scss';
import './index.scss';

export default function App() {
  return (
    <Router className='main-router'>
      <HomeView default path='/' />
      <NowView path='/now' />
      <PortfolioView path='/portfolio' />
    </Router>
  );
}

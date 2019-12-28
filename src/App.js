import React from 'react';
import { Router } from '@reach/router';

import HomeView from './home/HomeView';
import NowView from './now/NowView';
import PortfolioView from './portfolio/PortfolioView';
import Nav from './nav/Nav';

import './styles/App.scss';
import './index.scss';

export default function App() {
  return (
    <div className='main-view--wrapper'>
      <Router className='main-router'>
        <HomeView default path='/' />
        <NowView path='/now' />
        <PortfolioView path='/portfolio' />
      </Router>
      <Nav />
    </div>
  );
}

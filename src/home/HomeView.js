import React from 'react';
import { Link } from '@reach/router';

import { skillsList } from '../lib/skillsList';

import '../styles/Home.scss';

export default function HomeView() {
  return (
    <div className='main-view home'>
      <div className='hero-grid'>
        <h1>low</h1>
        <h1>key</h1>
        <h1 className='text--red'>dangerous</h1>
      </div>
      <div className='skills-grid'>
        {skillsList.map(skill => (
          <div className='skill--wrapper'>
            <h2>{skill.title}</h2>
            <p className='skill--detail hidden'>skill.details</p>
          </div>
        ))}
        <Link className='link--discrete text--red' to='/portfolio'>
          <h2>Let me prove it</h2>
        </Link>
      </div>
    </div>
  );
}

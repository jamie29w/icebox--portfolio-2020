import React from 'react';
import { Link } from '@reach/router';

import '../styles/Nav.scss';

export default function Nav() {
  return (
    <div className='nav--wrapper'>
      <a
        href='https://github.com/jamie29w'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fab fa-github fa-2x'></i>
      </a>
      <Link to='/'>skills</Link>
      <Link to='/now'>now</Link>
      <Link to='/portfolio'>portfolio</Link>
      <a
        href='https://www.linkedin.com/in/jamiewoodmancy/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fab fa-linkedin-in fa-2x'></i>
      </a>
    </div>
  );
}

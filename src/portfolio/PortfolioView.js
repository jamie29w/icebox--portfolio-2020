import React, { useEffect, useRef } from 'react';
import gsap, { TimelineMax } from 'gsap';

import Nav from '../nav/Nav';
import '../styles/Portfolio.scss';

import { portfolioData } from '../lib/dummyPortfolioData';

export default function PortfolioView() {
  const portfolioWrapperRef = useRef(null);

  gsap.registerPlugin(TimelineMax);

  useEffect(() => {
    const fadeInTimeline = new TimelineMax();

    fadeInTimeline.fromTo(
      portfolioWrapperRef.current,
      0.5,
      { opacity: 0.5 },
      { opacity: 1 }
    );
  }, []);

  return (
    <div ref={portfolioWrapperRef} className='portfolio--wrapper'>
      <h1>Personal Projects</h1>
      {portfolioData.length && (
        <div className='projects-grid'>
          {portfolioData.map(project => (
            <div id={project.title} key={project.title}>
              <h2>{project.title}</h2>
              {project.images.map(image => {
                return (
                  <img
                    className='project--image'
                    src={image.src}
                    alt={image.alt}
                    key={image.src}
                  />
                );
              })}
              <p>{project.details}</p>
            </div>
          ))}
        </div>
      )}
      <Nav />
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@reach/router';
import { TimelineMax, Power1, Power2, Power3, Power4 } from 'gsap/all';

import { skillsList } from '../lib/skillsList';

import '../styles/Home.scss';

export default function HomeView() {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const [screenWidth, setScreenWidth] = useState();
  const animationSpeed = 0.6;

  const heroGridRef = useRef(null);
  const heroText1Ref = useRef(null);
  const heroText2Ref = useRef(null);
  const heroText3Ref = useRef(null);

  useEffect(() => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    setScreenWidth(width);
  }, []);

  useEffect(() => {
    const heroTextSlideIn = new TimelineMax({ delay: 1 });

    heroTextSlideIn
      .from(heroText1Ref.current, animationSpeed, {
        x: screenWidth * 1.1,
        display: 'hidden',
        opacity: 0,
      })
      .from(
        heroText2Ref.current,
        animationSpeed,
        { x: screenWidth * 1.1, display: 'hidden', opacity: 0 },
        '-=0.2'
      )
      .from(
        heroText3Ref.current,
        animationSpeed,
        { x: screenWidth * 1.1, display: 'hidden', opacity: 0 },
        '-=0.2'
      );
  }, [screenWidth]);

  useEffect(() => {
    if (hasScrolledDown) {
      const lkdAnimateToTop = new TimelineMax();

      lkdAnimateToTop
        .to(heroText1Ref.current, 0.3, {
          bottom: '0%',
          ease: Power3.easeIn,
        })
        .to(
          heroText2Ref.current,
          0.3,
          {
            bottom: '0%',
            ease: Power2.easeIn,
          },
          0
        )
        .to(heroGridRef.current, animationSpeed, {
          minHeight: 'initial',
          height: 75,
          ease: Power1.easeIn,
          padding: '16px',
        })
        .call(() => updateTextOfRef('jamie', heroText1Ref.current))
        .to(
          heroText2Ref.current,
          animationSpeed,
          {
            alpha: 0,
            display: 'none',
            ease: Power4.easeInOut,
          },
          `-=${animationSpeed}`
        )
        .call(() => updateTextOfRef('WOODMANCY', heroText3Ref.current))
        .to(heroText3Ref.current, animationSpeed, {
          right: screenWidth < 400 ? 16 : null,
          left: screenWidth > 400 ? 100 : null,
        });
    }
  }, [hasScrolledDown]);

  const updateTextOfRef = (newText, ref) => {
    ref.innerText = newText;
  };

  const handleScroll = e => {
    const { nativeEvent } = e;
    if (nativeEvent.wheelDelta > 0) {
    } else {
      setHasScrolledDown(true);
    }
  };

  return (
    <div onWheel={handleScroll} className='main-view home'>
      {screenWidth && (
        <div ref={heroGridRef} className='hero-grid'>
          <h1 className='hero-text hero-text1' ref={heroText1Ref}>
            low
          </h1>
          <h1 className='hero-text hero-text2' ref={heroText2Ref}>
            key
          </h1>
          <h1 className='hero-text hero-text3 text--red' ref={heroText3Ref}>
            dangerous
          </h1>
        </div>
      )}
      <div className='skills-grid'>
        {skillsList.map(skill => (
          <div key={skill.title} className='skill--wrapper'>
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

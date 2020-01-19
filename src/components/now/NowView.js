import React, { useEffect, useRef } from 'react';
import gsap, { TimelineMax } from 'gsap';

import Post from './Post';
import Nav from '../nav/Nav';

import { dummyPosts } from '../../lib/dummyPostData';
import { prettifyDate } from '../../lib/helpers';

import './styles.scss';

export default function NowView() {
  const nowWrapperRef = useRef(null);

  gsap.registerPlugin(TimelineMax);

  useEffect(() => {
    const fadeInTimeline = new TimelineMax();

    fadeInTimeline.fromTo(
      nowWrapperRef.current,
      0.5,
      { opacity: 0.5 },
      { opacity: 1 }
    );
  }, []);

  return (
    <div ref={nowWrapperRef} className='now--wrapper'>
      <h1>now</h1>
      <div className='posts--wrapper'>
        <div className='recent-post'>
          <h2>title goes here</h2>
          <h4>{prettifyDate(new Date())}</h4>
          <hr></hr>
          <p>
            Today is a great new day to start blogging. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <hr />
        </div>
        <div className='older-posts'>
          {dummyPosts.map((post, index) => (
            <Post
              key={post.title}
              post={post}
              isLast={index === dummyPosts.length - 1}
            />
          ))}
        </div>
      </div>

      <Nav />
    </div>
  );
}

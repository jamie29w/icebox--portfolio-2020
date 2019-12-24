import React from 'react';
import Post from './Post';
import { dummyPosts } from '../lib/dummyPostData';

import '../styles/App.scss';

export default function NowView() {
  return (
    <div className='main'>
      <h1>now</h1>
      <div className='recent-post'>
        <h2>title goes here</h2>
        <h4>Jan. 4, 2020</h4>
        <hr></hr>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          aliquam tempora beatae exercitationem accusantium? Quisquam cumque
          obcaecati commodi consectetur laudantium quis, quidem deserunt neque
          voluptas ut ipsam harum quas itaque.
        </p>
      </div>
      <hr />

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
  );
}

import React from 'react';

import { prettifyDate } from '../../lib/helpers';

export default function Post({ post, isLast }) {
  return (
    <div className='post--wrapper'>
      <h4 className='post--title'>{post.title}</h4>
      <h6 className='post--date'>{prettifyDate(post.date)}</h6>
      <p>{post.body}</p>
      {!isLast && <hr />}
    </div>
  );
}

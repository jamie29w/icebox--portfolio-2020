import React from 'react';

export default function Post({ post, isLast }) {
  return (
    <div className='post'>
      <h4 className='post--title'>{post.title}</h4>
      <h6 className='post--date'>{String(post.date)}</h6>
      <p>{post.body}</p>
      {!isLast && <hr />}
    </div>
  );
}

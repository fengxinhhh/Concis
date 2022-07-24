import React from 'react';
import Comment from '..';
import Avatar from '../../Avatar';

export default function index3() {
  const commentData = {
    author: 'Concis',
    avatar: <Avatar>View</Avatar>,
    content: 'Hello Concis,coding is life,comment body content.',
    datetime: '2022-7-24',
  };
  return (
    <>
      <Comment
        {...commentData}
        showReplay={true}
        handleChange={(value) => {
          console.log(value);
        }}
      />
      <Comment
        {...commentData}
        showReplay={true}
        handleChange={(value) => {
          console.log(value);
        }}
      />
    </>
  );
}

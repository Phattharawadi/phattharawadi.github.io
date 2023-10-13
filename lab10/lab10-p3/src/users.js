// User.js
import React from 'react';

function User({ data }) {
  return (
    <div className="user">
      <a href={data.html_url} target="_blank" rel="noopener noreferrer">
        <img src={data.avatar_url} alt={data.login} width="100" />
        <h2>{data.login}</h2>
      </a>
      <p>Followers: {data.followers}</p>
    </div>
  );
}

export default User;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // Assuming "ChatGPT" as the username to start with.
  const usernames = ['ChatGPT'];  // You can expand this list based on your requirement.
  
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (usernames && usernames.length > 0) {
      const username = usernames[0];  // Fetching data for the first username as per the requirement.

      axios.get(`https://api.github.com/users/${username}`)
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }
  }, [usernames]);

  return (
    <div className="App">
      <h1>Lab 10 Problem 3</h1>
      {userData ? (
        <div>
          <h2>{userData.name}</h2>
          <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} width="100" />
          <p>GitHub Username: {userData.login}</p>
          <p>Location: {userData.location}</p>
          <p>Followers: {userData.followers}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}

export default App;

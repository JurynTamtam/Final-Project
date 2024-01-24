// src/App.js
import React, { useState, useEffect } from 'react';
import Post from './Components/post';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('src/data/data.json')
      .then((response) => response.json())
      .then((data) => setPosts(data.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1></h1>
      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default App;

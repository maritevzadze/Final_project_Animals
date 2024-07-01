import React from 'react';
import useFetch from '../hooks/useFetch';

const Gallery = () => {
  const { data, loading, error } = useFetch('https://api.example.com/animals');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Animal Gallery</h1>
      <ul>
        {data.map((animal) => (
          <li key={animal.id}>{animal.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;

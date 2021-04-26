import React, { useState, useEffect } from 'react';

import { getMovies } from '../../services/movies';
import Card from '../../components/Card';

import { Container } from './styled.js';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { data } = await getMovies();

    if (Array.isArray(data.items)) {
        setMovies(data.items);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <Container>
        {movies.map((movie, index) => (<Card key={index} movie={movie} />))}
    </Container>
  );
};

export default Movies;

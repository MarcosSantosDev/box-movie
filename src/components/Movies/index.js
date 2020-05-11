import React, { useState, useEffect } from 'react';

import { getMovies } from '../../helpers';

import { Container } from './styled.js';

import Card  from './Card';

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    let { data } = await getMovies();

    const movies = data.items.map(movie => {
      const { id, title, overview, popularity, poster_path, backdrop_path } = movie;

      return { id, title, overview, popularity, poster_path, backdrop_path };
    });

    setMovies(movies);
  }

  useEffect(() => {
    fetchMovies()
  }, []);

  return (
    <>
    {
      movies &&
      <Container>
        {
          movies.map((movie, index) => (<Card movie={movie} />))
        }
      </Container>
    }
    </>
  )
}

export default Movie;
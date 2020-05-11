import React from 'react';

import env from '../../../services/config'

import {
  Container,
  CardImg,
  CardDescription,
  Title,
} from './styled.js';

const Card = ({ movie: { backdrop_path, id, overview, popularity, poster_path, title }}) => {  
  return (
    <Container>
      <CardImg src={`${env.API_BASE_URL_IMAGE}/w500${poster_path}`}></CardImg>
      <CardDescription>
        <Title>{title}</Title>
      </CardDescription>
    </Container>
  );
}

export default Card;

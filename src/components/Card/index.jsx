import React from 'react';
import PropTypes from 'prop-types';

import { getImageW500 } from '../../helpers/assets';

import {
  Container,
  CardImg,
  CardDescription,
  Title,
} from './styled.js';

const Card = ({ movie }) => (
  <Container>
    <CardImg src={getImageW500(movie.poster_path)}></CardImg>
    <CardDescription>
      <Title>{movie.title}</Title>
    </CardDescription>
  </Container>
);

Card.propTypes = {
  movie: PropTypes.object,
};

export default Card;

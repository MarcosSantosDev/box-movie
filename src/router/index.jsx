import React from 'react';

import { Router as ReachRouter } from '@reach/router';

import Movies from '../pages/Movies';

const NotFound = () => <p>Sorry, nothing here</p>;

const Router = () => {
  return (
    <ReachRouter>
      <NotFound default />
      <Movies path="/" />
    </ReachRouter>
  );
};

export default Router;

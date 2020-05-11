import React from 'react';

import { Router as ReachRouter } from '@reach/router';

import Header from '../Header';
import Movies from '../Movies';

const NotFound = () => <p>Sorry, nothing here</p>

const Router = () => {
  return (
    <>
      <Header />
      <ReachRouter>
        <NotFound default />

        <Movies path="/" />
      </ReachRouter>
    </>
  );
}

export default Router;
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} />
    </BrowserRouter>
  );
};

export default Routes;
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Collection } from './pages/Collection';
import { CreateCard } from './pages/CreateCard';
import Header from './components/Header';
import './main.css';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/collection" component={Collection} />
      <Route exact path="/create-card" component={CreateCard} />
    </Switch>
  </Router>
);

render(<App />, document.getElementById('root'));


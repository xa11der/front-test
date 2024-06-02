import React, { Suspense, lazy } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Notification from './components/ui/Notification';
import './main.css';

const Collection = lazy(() => import('./pages/Collection'));
const CreateCard = lazy(() => import('./pages/CreateCard'));
const EditCard = lazy(() => import('./pages/EditCard'));

const App = () => (
  <Suspense fallback={<Notification message="Loading..." />}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/create-card" component={CreateCard} />
        <Route exact path="/edit-card/:id" component={EditCard} />
      </Switch>
      <Toaster />
    </Router>
  </Suspense>
);

render(<App />, document.getElementById('root'));


import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import Books from './pages/Books/Books'

function Main() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/books/:id' component={Books} />
      </Switch>
    </Fragment>
  );
}

export default withRouter(Main);
import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// components
import NotFound from 'components/core/NotFound/NotFound';
import Login from 'components/core/auth/Login/Login';
import Start from 'components/Start/Start';
import Dashboard from 'components/Dashboard/Dashboard';
import SecretPage from 'components/SecretPage/SecretPage';
import Header from 'components/core/Header/Header';

import './styles.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <main className="Main">
            <Switch>
              <Route exact path="/" component={Start} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/login" component={Login} />
              <Route path="/secret-page" component={SecretPage} />
              <Route component={NotFound} />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

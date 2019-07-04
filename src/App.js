import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import jwt_decode from 'jwt-decode'

import store from './store'

import Header from './components/Header'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Body from './components/Header'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/" component={Body} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              {/* <Route path="/profile/:userId" component={Profile} />
              <Route path="/search" component={Search} />
              <Route component={NotFound}/> */}
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;

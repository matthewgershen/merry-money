import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginForm from './session/login_form_container';
import SignupForm from './session/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from './../util/route_util';

const App = () => (
  <div>
    <Route exact path="/" component={GreetingContainer} />
    <AuthRoute path="/login" component={LoginForm} />
    <AuthRoute path="/signup" component={SignupForm} />
  </div>
);

export default App;

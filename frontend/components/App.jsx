import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import LoginForm from './session/login_form_container';
import SignupForm from './session/signup_form_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from './../util/route_util';
import Splash from './splash/splash';
import StockContainer from './stocks/stock_container';
import PortfolioContainer from './portfolio/portfolio_container';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={GreetingContainer} />
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute path="/login" component={LoginForm} />
    <AuthRoute path="/signup" component={SignupForm} />
    <ProtectedRoute path="/" component={GreetingContainer} />
    <ProtectedRoute path="/stocks/:id" component={StockContainer} />
  </div>
);

export default App;

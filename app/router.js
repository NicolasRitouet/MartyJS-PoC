/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var routes = [
  <Route name="home" path="/" handler={require('./components/Home.react')} />,
  <Route name="help" path="/help" handler={require('./components/Help.react')} />,
  <Route name="about" path="/about" handler={require('./components/About.react')} />,
  <Route name="login" path="/login" handler={require('./components/Login.react')} />,
  <Route name="register" path="/register" handler={require('./components/Register.react')} />,
  <Route name="dashboard" path="/dashboard" handler={require('./components/Dashboard.react')} />
];

module.exports = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});

/** @jsx React.DOM */

var React = require('react');
var Router = require('react-router');
var Link = Router.Link,
    RouteHandler = Router.RouteHandler

var Header = React.createClass({
  render: function () {
    return (
      <div className="header">
        Libre Prof
        <Link to="about">About</Link>
        <Link to="help">Help</Link>
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = Header;

/** @jsx React.DOM */

var React = require('react');
var Header = require('./Header.react');

var Login = React.createClass({
  render: function () {
    return (
      <div className="login">
      <Header />
      <h1 ref="title">Login</h1>
      </div>
    );
  }
});

module.exports = Login;

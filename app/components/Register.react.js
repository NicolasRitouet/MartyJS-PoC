/** @jsx React.DOM */

var React = require('react');
var Header = require('./Header.react');

var Register = React.createClass({
  render: function () {
    return (
      <div className="register">
      <Header />
      <h1 ref="title">Register</h1>
      </div>
    );
  }
});

module.exports = Register;

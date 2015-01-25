/** @jsx React.DOM */

var React = require('react');
var Header = require('./Header.react');

var About = React.createClass({
  render: function () {
    return (
      <div className="home">
      <Header />
      <h1 ref="title">About</h1>
      </div>
    );
  }
});

module.exports = About;

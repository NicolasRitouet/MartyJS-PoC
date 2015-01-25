/** @jsx React.DOM */

var React = require('react');
var Header = require('./Header.react');

var Home = React.createClass({
  render: function () {
    return (
      <div className="home">
        <Header />
        <h1 ref="title">Libre Prof</h1>
      </div>
    );
  }
});

module.exports = Home;

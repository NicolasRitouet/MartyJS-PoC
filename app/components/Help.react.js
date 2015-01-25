/** @jsx React.DOM */

var React = require('react');
var Header = require('./Header.react');

var Help = React.createClass({
  render: function () {
    return (
      <div className="home">
      <Header />
      <h1 ref="title">Help</h1>
      </div>
    );
  }
});

module.exports = Help;

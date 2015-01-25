/** @jsx React.DOM */

var React = require('react');
var Header = require('./Header.react');

var Dashboard = React.createClass({
  render: function () {
    return (
      <div className="home">
      <Header />
      <h1 ref="title">Dashboard
      </h1>
      </div>
    );
  }
});

module.exports = Dashboard;

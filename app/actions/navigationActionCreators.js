var Marty = require('marty');
var Router = require('../router');

var NavigationActionCreators = Marty.createActionCreators({
  displayName: 'Navigation',
  navigateHome: function () {
    navigateTo('home');
  },
  navigateToRegister: function () {
    navigateTo('register');
  }
});

function navigateTo(route, params) {
  require('../router').transitionTo(route, params || {});
}

module.exports = NavigationActionCreators;

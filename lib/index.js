var SettingsFile = require('nachos-settings-file');
var nachosHome = require('nachos-home');

var defaults = {
  packages: nachosHome('packages'),
  server: 'http://nachosjs.herokuapp.com'
};

module.exports = function() {
  return new SettingsFile('nachos', {
    globalDefaults: defaults
  });
};
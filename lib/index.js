'use strict';

var SettingsFile = require('nachos-settings-file');
var nachosHome = require('nachos-home');
var debug = require('debug')('settingsFile');

var defaults = {
  packages: nachosHome('packages'),
  server: 'http://nachosjs.herokuapp.com'
};

module.exports = function () {
  debug('creating new settings file with these defaults');
  debug(defaults);

  return new SettingsFile('nachos', {
    globalDefaults: defaults
  });
};
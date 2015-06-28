'use strict';

var SettingsFile = require('nachos-settings-file');
var nachosHome = require('nachos-home');
var debug = require('debug')('nachosConfig');
var util = require('util');

function NachosConfig() {
  var defaults = {
    packages: nachosHome('packages'),
    server: 'http://nachosjs.herokuapp.com'
  };

  debug('creating new settings file with these defaults');
  debug(defaults);

  SettingsFile.call(this, 'nachos', {
    globalDefaults: defaults
  });
}

util.inherits(NachosConfig, SettingsFile);

NachosConfig.prototype.NachosConfig = NachosConfig;

module.exports = new NachosConfig();
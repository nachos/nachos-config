'use strict';

var SettingsFile = require('nachos-settings-file');
var nachosHome = require('nachos-home');
var debug = require('debug')('nachosConfig');
var util = require('util');
var Q = require('q');

/**
 * Creating a settings file with nachos defaults
 *
 * @constructor
 */
function NachosConfig() {
  var defaults = {
    packages: nachosHome('packages'),
    server: 'http://nachosjs.herokuapp.com',
    defaults: {
      exts: {}
    }
  };

  debug('creating new settings file with these defaults: %j', defaults);

  SettingsFile.call(this, 'nachos', {
    globalDefaults: defaults
  });
}

util.inherits(NachosConfig, SettingsFile);

/**
 * Expose the constructor
 * @type {NachosConfig}
 */
NachosConfig.prototype.NachosConfig = NachosConfig;

/**
 * Get the default app command that opens the given extension
 *
 * @param {String} ext The file extension
 * @returns {Q.promise} Promise to the default app command
 */
NachosConfig.prototype.getDefaultApp = function (ext) {
  if (!ext) {
    return Q.reject(new TypeError('extension must be provided'));
  }

  if (typeof ext !== 'string') {
    return Q.reject(new TypeError('extension must be a string'));
  }

  debug('getting command for %s extension', ext);

  return this.get()
    .then(function (config) {
      var command = config.defaults.exts[ext];

      debug('got command %s for %s extension', command, ext);

      return command;
    });
};

/**
 * Set the default app command that opens the given extension
 *
 * @param {String} ext The file extension
 * @param {String} command The execution command
 * @returns {Q.promise} Promise to save
 */
NachosConfig.prototype.setDefaultApp = function (ext, command) {
  if (!ext) {
    return Q.reject(new TypeError('extension must be provided'));
  }

  if (typeof ext !== 'string') {
    return Q.reject(new TypeError('extension must be a string'));
  }

  if (!command) {
    return Q.reject(new TypeError('command must be provided'));
  }

  if (typeof command !== 'string') {
    return Q.reject(new TypeError('command must be a string'));
  }

  debug('setting command %s for %s extension', command, ext);

  var content = {defaults: {exts: {}}};

  content.defaults.exts[ext] = command;

  return this.set(content);
};

module.exports = new NachosConfig();
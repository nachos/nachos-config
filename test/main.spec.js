'use strict';

var expect = require('chai').expect;
var nachosConfig = require('../lib');
var SettingsFile = require('nachos-settings-file');

describe('nachos-config', function () {
  describe('initialize', function () {
    var config = nachosConfig();

    it('should return an instance of SettingsFile', function () {
      expect(config).to.be.an.instanceof(SettingsFile);
    });

    describe('globalDefaults property check', function () {
      it('should have globalDefaults in options', function () {
        expect(config._options.globalDefaults).to.be.an('object');
      });

      it('should have globalDefaults initialized with \'packages\' and \'server\' properties', function () {
        expect(config._options.globalDefaults.packages).to.be.a('string');
        expect(config._options.globalDefaults.packages).to.be.a('string');
      });
    });
  });

  describe('exports', function () {
    it('should expose a function', function () {
      expect(nachosConfig).to.be.a('function');
    });
  });
});
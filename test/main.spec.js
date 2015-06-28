'use strict';

var expect = require('chai').expect;
var nachosConfig = require('../lib');
var SettingsFile = require('nachos-settings-file');

describe('nachos-config', function () {
  describe('initialize', function () {
    var config = new nachosConfig.NachosConfig();

    it('should return an instance of SettingsFile', function () {
      expect(config).to.be.an.instanceof(SettingsFile);
      expect(config).to.be.an.instanceof(nachosConfig.NachosConfig);
    });

    describe('globalDefaults property check', function () {
      it('should have globalDefaults in options', function () {
        expect(config._options.globalDefaults).to.be.an('object');
      });

      it('should have globalDefaults initialized with \'packages\' and \'server\' properties', function () {
        expect(config._options.globalDefaults.packages).to.be.a('string');
        expect(config._options.globalDefaults.server).to.be.a('string');
      });
    });
  });

  describe('exports', function () {
    it('should expose a nachosConfig object', function () {
      expect(nachosConfig).to.be.an('object');
      expect(nachosConfig).to.be.an.instanceof(SettingsFile);
    });

    it('should expose a nachosConfig ctor', function () {
      expect(nachosConfig.NachosConfig).to.be.a('function');
    });
  });
});
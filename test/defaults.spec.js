'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var mockery = require('mockery');
var Q = require('q');

chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));

describe('nachos-config', function () {
  describe('app defaults', function () {
    describe('get', function () {
      var nachosConfig;
      var configFile = {
        defaults: {
          exts: {
            txt: 'lol.exe %1'
          }
        }
      };

      beforeEach(function () {
        var nachosSettingsFileMock = function () {
        };

        nachosSettingsFileMock.prototype.get = sinon.stub().returns(Q.resolve(configFile));

        mockery.registerMock('nachos-settings-file', nachosSettingsFileMock);
        mockery.enable({
          useCleanCache: true,
          warnOnReplace: false,
          warnOnUnregistered: false
        });

        nachosConfig = require('../lib');
      });

      afterEach(function () {
        mockery.deregisterMock('nachos-settings-file');
        mockery.disable();
      });

      describe('without parameters', function () {
        it('should reject with type error', function () {
          return expect(nachosConfig.getDefaultApp()).to.eventually.be.rejectedWith(TypeError, 'extension must be provided');
        });
      });

      describe('with invalid parameters', function () {
        it('should reject as function', function () {
          return expect(nachosConfig.getDefaultApp(function () {
          })).to.eventually.be.rejectedWith(TypeError, 'extension must be a string');
        });

        it('should reject app as object', function () {
          return expect(nachosConfig.getDefaultApp({})).to.eventually.be.rejectedWith(TypeError, 'extension must be a string');
        });

        it('should reject app as number', function () {
          return expect(nachosConfig.getDefaultApp(5)).to.eventually.be.rejectedWith(TypeError, 'extension must be a string');
        });

        it('should reject app as boolean', function () {
          return expect(nachosConfig.getDefaultApp(true)).to.eventually.be.rejectedWith(TypeError, 'extension must be a string');
        });
      });

      describe('with valid parameters', function () {
        it('should get a command', function () {
          return expect(nachosConfig.getDefaultApp('txt')).to.eventually.equal(configFile.defaults.exts.txt);
        });

        it('should be empty', function () {
          return expect(nachosConfig.getDefaultApp('mkv')).to.eventually.be.empty;
        });
      });
    });

    describe('set', function () {
      var nachosConfig;
      var nachosSettingsFileMock;

      beforeEach(function () {
        nachosSettingsFileMock = function () {};

        nachosSettingsFileMock.prototype.get = sinon.stub().returns(Q.resolve({ defaults: { exts: {}}}));
        nachosSettingsFileMock.prototype.set = sinon.stub().returns(Q.resolve());

        mockery.registerMock('nachos-settings-file', nachosSettingsFileMock);
        mockery.enable({
          useCleanCache: true,
          warnOnReplace: false,
          warnOnUnregistered: false
        });

        nachosConfig = require('../lib');
      });

      afterEach(function () {
        mockery.deregisterMock('nachos-settings-file');
        mockery.disable();
      });

      describe('without parameters', function () {
        it('should reject without extension', function () {
          return expect(nachosConfig.setDefaultApp()).to.eventually.be.rejectedWith(TypeError, 'extension must be provided');
        });

        it('should reject without command', function () {
          return expect(nachosConfig.setDefaultApp('txt')).to.eventually.be.rejectedWith(TypeError, 'command must be provided');
        });
      });

      describe('with invalid parameters', function () {
        describe('invalid extension', function () {
          it('should reject as function', function () {
            return expect(nachosConfig.setDefaultApp(function () {})).to.eventually.be.rejectedWith(TypeError, 'extension must be a string');
          });

          it('should reject app as object', function () {
            return expect(nachosConfig.setDefaultApp({})).to.eventually.be.rejectedWith(TypeError, 'extension must be a string');
          });

          it('should reject app as number', function () {
            return expect(nachosConfig.setDefaultApp(5)).to.eventually.be.rejectedWith(TypeError, 'extension must be a string');
          });

          it('should reject app as boolean', function () {
            return expect(nachosConfig.setDefaultApp(true)).to.eventually.be.rejectedWith(TypeError, 'extension must be a string');
          });
        });

        describe('invalid command', function () {
          it('should reject as function', function () {
            return expect(nachosConfig.setDefaultApp('txt', function () {})).to.eventually.be.rejectedWith(TypeError, 'command must be a string');
          });

          it('should reject app as object', function () {
            return expect(nachosConfig.setDefaultApp('txt', {})).to.eventually.be.rejectedWith(TypeError, 'command must be a string');
          });

          it('should reject app as number', function () {
            return expect(nachosConfig.setDefaultApp('txt', 5)).to.eventually.be.rejectedWith(TypeError, 'command must be a string');
          });

          it('should reject app as boolean', function () {
            return expect(nachosConfig.setDefaultApp('txt', true)).to.eventually.be.rejectedWith(TypeError, 'command must be a string');
          });
        });
      });

      describe('with valid parameters', function () {
        it('should set a command', function () {
          return nachosConfig.setDefaultApp('txt', 'app')
            .then(function () {
              expect(nachosConfig.set).to.have.been.calledWithExactly({ defaults: { exts: { txt: 'app' }}});
            });
        });
      });
    });
  });
});
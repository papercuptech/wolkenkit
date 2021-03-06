'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var docker = require('../../docker'),
    getImages = require('./getImages');

var getMissingImages = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(options) {
    var configuration, env, forVersion, missingImages, images, i, image, name, version, isInstalled;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (options) {
              _context.next = 2;
              break;
            }

            throw new Error('Options are missing.');

          case 2:
            if (options.configuration) {
              _context.next = 4;
              break;
            }

            throw new Error('Configuration is missing.');

          case 4:
            if (options.env) {
              _context.next = 6;
              break;
            }

            throw new Error('Environment is missing.');

          case 6:
            if (options.forVersion) {
              _context.next = 8;
              break;
            }

            throw new Error('Version is missing.');

          case 8:
            configuration = options.configuration, env = options.env, forVersion = options.forVersion;
            missingImages = [];
            _context.next = 12;
            return getImages({ forVersion: forVersion });

          case 12:
            images = _context.sent;
            i = 0;

          case 14:
            if (!(i < images.length)) {
              _context.next = 26;
              break;
            }

            image = images[i];
            name = image.name, version = image.version;
            _context.next = 19;
            return docker.isImageInstalled({ configuration: configuration, env: env, name: name, version: version });

          case 19:
            isInstalled = _context.sent;

            if (!isInstalled) {
              _context.next = 22;
              break;
            }

            return _context.abrupt('continue', 23);

          case 22:

            missingImages.push(image);

          case 23:
            i++;
            _context.next = 14;
            break;

          case 26:
            return _context.abrupt('return', missingImages);

          case 27:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getMissingImages(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = getMissingImages;
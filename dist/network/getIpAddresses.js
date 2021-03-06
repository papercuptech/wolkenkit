'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dns = require('dns');

var promisify = require('util.promisify');

var ip = require('./ip');

var lookup = promisify(dns.lookup);

var getIpAddresses = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(hostOrIp) {
    var addresses;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (hostOrIp) {
              _context.next = 2;
              break;
            }

            throw new Error('Host or IP is missing.');

          case 2:
            if (!ip.is(hostOrIp)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt('return', [{ address: hostOrIp, family: ip.getFamily(hostOrIp) }]);

          case 4:
            _context.next = 6;
            return lookup(hostOrIp, { all: true });

          case 6:
            addresses = _context.sent;
            return _context.abrupt('return', addresses);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getIpAddresses(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = getIpAddresses;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "bows", {
  enumerable: true,
  get: function get() {
    return _bows.default;
  }
});
Object.defineProperty(exports, "createLogger", {
  enumerable: true,
  get: function get() {
    return _bows.default;
  }
});
exports.Log = exports.log = exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _bows = _interopRequireDefault(require("bows"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bows.default.config({
  padding: false,
  separator: '//'
});

var log = (0, _bows.default)('');
exports.log = log;
var Log = {
  install: function install(Vue) {
    Vue.mixin({
      created: function created() {
        this.log = (0, _bows.default)(this.$options.name || '');
      }
    }); // More about defineProperty: https://stackoverflow.com/a/38961512/2176822

    Object.defineProperty(Vue.prototype, '$createLog', {
      value: _bows.default
    });
  }
};
exports.Log = Log;

_vue.default.use(Log);

var _default = Log;
exports.default = _default;
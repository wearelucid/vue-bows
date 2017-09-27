'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Log = undefined;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _bows = require('bows');

var _bows2 = _interopRequireDefault(_bows);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_bows2.default.config({
  padding: false,
  separator: '//'
});

var Log = exports.Log = {
  install: function install(Vue) {
    Vue.mixin({
      created: function created() {
        this.log = (0, _bows2.default)(this.$options.name || '');
      }
    });

    // More about defineProperty: https://stackoverflow.com/a/38961512/2176822
    Object.defineProperty(Vue.prototype, '$createLog', { value: _bows2.default });
  }
};

_vue2.default.use(Log);
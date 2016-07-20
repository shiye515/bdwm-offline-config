'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OfflineConfig = function () {
    function OfflineConfig(id, compilation) {
        (0, _classCallCheck3.default)(this, OfflineConfig);

        this.id = id;
        this.assets = (0, _keys2.default)(compilation.assets);
    }

    (0, _createClass3.default)(OfflineConfig, [{
        key: 'size',
        value: function size() {
            return Buffer.byteLength(this.source(), 'utf8');
        }
    }, {
        key: 'source',
        value: function source() {
            var config = {
                id: this.id,
                pages: this.assets.filter(function (v) {
                    return (/\.html$/.test(v)
                    );
                }).map(function (v) {
                    return {
                        name: v.slice(0, -5).replace('/', '-'),
                        file: '/' + v
                    };
                })
            };
            return (0, _stringify2.default)(config, null, '    ');
        }
    }]);
    return OfflineConfig;
}();

var OfflineConfigWebpackPlugin = function () {
    function OfflineConfigWebpackPlugin() {
        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        var _ref$output = _ref.output;
        var output = _ref$output === undefined ? 'config.js' : _ref$output;
        var _ref$id = _ref.id;
        var id = _ref$id === undefined ? 'default' : _ref$id;
        (0, _classCallCheck3.default)(this, OfflineConfigWebpackPlugin);

        this.id = id;
        this.output = output;
    }

    (0, _createClass3.default)(OfflineConfigWebpackPlugin, [{
        key: 'apply',
        value: function apply(compiler) {
            var _this = this;

            compiler.plugin('emit', function (compilation, callback) {
                var config = new OfflineConfig(_this.id, compilation);
                compilation.assets[_this.output] = config;
                callback();
            });
        }
    }]);
    return OfflineConfigWebpackPlugin;
}();

module.exports = OfflineConfigWebpackPlugin;
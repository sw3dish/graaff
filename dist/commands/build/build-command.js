"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = exports.builder = exports.describe = exports.command = void 0;

var _build = _interopRequireDefault(require("./build"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const command = ['$0', 'build', 'b'];
exports.command = command;
const describe = 'Build the contents of content directory into site';
exports.describe = describe;

const builder = yargs => {
  return yargs;
};

exports.builder = builder;

const handler = argv => {
  (0, _build.default)(argv);
};

exports.handler = handler;
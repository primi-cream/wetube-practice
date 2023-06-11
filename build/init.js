"use strict";

require("dotenv/config");
require("./db");
require("./models/Video");
require("./models/User");
require("./models/Comment");
var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_app["default"].listen(process.env.PORT, function () {
  console.log("Start Server http://localhost:".concat(process.env.PORT));
});
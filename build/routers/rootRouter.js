"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _videosController = require("../controllers/videosController");
var _usersController = require("../controllers/usersController");
var _middlewares = require("../middlewares");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var rootRouter = _express["default"].Router();
rootRouter.get("/", _videosController.home);
rootRouter.route("/join").all(_middlewares.publicOnlyMiddleware).get(_usersController.getJoin).post(_usersController.postJoin);
rootRouter.route("/login").all(_middlewares.publicOnlyMiddleware).get(_usersController.getLogin).post(_usersController.postLogin);
rootRouter.get("/search", _videosController.search);
var _default = rootRouter;
exports["default"] = _default;
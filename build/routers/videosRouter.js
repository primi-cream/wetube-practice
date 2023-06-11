"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _videosController = require("../controllers/videosController");
var _middlewares = require("../middlewares");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var videoRouter = _express["default"].Router();
videoRouter.get("/:id([0-9a-f]{24})", _videosController.watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").all(_middlewares.protectorMiddleware).get(_videosController.getEdit).post(_videosController.postEdit);
videoRouter.route("/upload").all(_middlewares.protectorMiddleware).get(_videosController.getUpload).post(_middlewares.videoUpload.single("video"), _videosController.postUpload);
videoRouter.route("/:id([0-9a-f]{24})/delete").all(_middlewares.protectorMiddleware).get(_videosController.deleteVideo);
var _default = videoRouter;
exports["default"] = _default;
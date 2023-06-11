"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _videosController = require("../controllers/videosController");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var apiRouter = _express["default"].Router();
apiRouter.post("/videos/:id([0-9a-f]{24})/view", _videosController.registerView);
apiRouter.post("/videos/:id([0-9a-f]{24})/comment", _videosController.createComment);
var _default = apiRouter;
exports["default"] = _default;
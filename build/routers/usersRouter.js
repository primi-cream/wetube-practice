"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _usersController = require("../controllers/usersController");
var _middlewares = require("../middlewares");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var usersRouter = _express["default"].Router();
usersRouter.get("/logout", _middlewares.protectorMiddleware, _usersController.logout);
usersRouter.route("/edit").all(_middlewares.protectorMiddleware).get(_usersController.getEdit).post(_middlewares.avatarUpload.single("avatar"), _usersController.postEdit);
usersRouter.route("/change-password").all(_middlewares.protectorMiddleware).get(_usersController.getChangePassword).post(_usersController.postChangePassword);
usersRouter.get("/github/start", _middlewares.publicOnlyMiddleware, _usersController.startGithubLogin);
usersRouter.get("/github/finish", _middlewares.publicOnlyMiddleware, _usersController.finishGithubLogin);
usersRouter.get("/:id", _usersController.see);
var _default = usersRouter;
exports["default"] = _default;
import express from "express"
import { see, getEdit, postEdit, logout, startGithubLogin, finishGithubLogin, getChangePassword, postChangePassword } from "../controllers/usersController";
import { protectorMiddleware, publicOnlyMiddleware, avatarUpload } from "../middlewares";

const usersRouter = express.Router();

usersRouter.get("/logout", protectorMiddleware, logout);
usersRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(avatarUpload.single("avatar"),postEdit);
usersRouter.route("/change-password").all(protectorMiddleware).get(getChangePassword).post(postChangePassword);
usersRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
usersRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
usersRouter.get("/:id", see);

export default usersRouter;

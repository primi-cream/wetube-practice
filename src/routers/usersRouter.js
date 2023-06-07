import express from "express"
import { see, getEdit, postEdit, logout, startGithubLogin, finishGithubLogin } from "../controllers/usersController";
import { protectorMiddleware, publicOnlyMiddleware } from "../middlewares";

const usersRouter = express.Router();

usersRouter.get("/logout", protectorMiddleware, logout);
usersRouter.route("/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
usersRouter.get("/github/start", publicOnlyMiddleware, startGithubLogin);
usersRouter.get("/github/finish", publicOnlyMiddleware, finishGithubLogin);
usersRouter.get("/:id", see);

export default usersRouter;

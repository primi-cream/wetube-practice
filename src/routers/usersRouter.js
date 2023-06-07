import express from "express"
import { see, edit, logout, startGithubLogin, finishGithubLogin } from "../controllers/usersController";

const usersRouter = express.Router();

usersRouter.get("/logout", logout);
usersRouter.get("/edit", edit);
usersRouter.get("/github/start", startGithubLogin);
usersRouter.get("/github/finish", finishGithubLogin);
usersRouter.get("/:id", see);

export default usersRouter;

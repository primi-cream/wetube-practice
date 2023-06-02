import express from "express"
import { watch, remove, edit, logout } from "../controllers/usersController";

const usersRouter = express.Router();

usersRouter.get("/:id(\\d+)");
usersRouter.get("/logout", logout);
usersRouter.get("/edit", edit);
usersRouter.get("/delete", watch);

export default usersRouter;
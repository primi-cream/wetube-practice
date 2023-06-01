import express from "express"
import { remove, edit, watch, upload } from "../controllers/videosController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d)",watch);
videoRouter.get("/:id(\\d)/edit",edit);
videoRouter.get("/:id(\\d)/delete",remove);
videoRouter.get("/upload",upload);

export default videoRouter;
// URL이 /video로 시작
import express from "express";
import {
  watch,
  getEdit,
  postEdit,
  upload,
  deleteVideo,
} from "../controllers/videoControllers";
const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.get("/:id(\\d+)/edit", getEdit);

export default videoRouter;

// URL이 /video로 시작
import express from "express";
import { watchVideos, editVideos } from "../controllers/videoControllers";
const videoRouter = express.Router();

videoRouter.get("/watch", watchVideos);
videoRouter.get("/edit", editVideos);

export default videoRouter;

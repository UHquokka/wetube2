// URL이 /로 시작
import express from "express";
import { treding } from "../controllers/videoControllers";
import { join } from "../controllers/userControllers";

const globalRouter = express.Router();

globalRouter.get("/", treding);
globalRouter.get("/join", join);

export default globalRouter;

// URL이 /로 시작
import express from "express";
import { treding, search } from "../controllers/videoControllers";
import { join, login } from "../controllers/userControllers";

const globalRouter = express.Router();

globalRouter.get("/", treding);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;

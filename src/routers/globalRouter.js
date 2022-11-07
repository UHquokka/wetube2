// URL이 /로 시작
import express from "express";

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");
const handleJoin = (req, res) => res.send("Join");

globalRouter.get("/", handleHome);
globalRouter.get("/join", handleJoin);

export default globalRouter;

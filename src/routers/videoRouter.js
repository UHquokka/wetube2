// URL이 /video로 시작
import express from "express";

const videoRouter = express.Router();

const handleWatch = (req, res) => res.send("Videos");
const handleEdit = (req, res) => res.send("Edit Videos");

videoRouter.get("/watch", handleWatch);
videoRouter.get("/edit", handleEdit);

export default videoRouter;

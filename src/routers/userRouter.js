// URL이 /users 로 시작
import express from "express";
import { editUser, remove } from "../controllers/userControllers";
const userRouter = express.Router();

userRouter.get("/edit", editUser);
userRouter.get("/remove", remove);

export default userRouter;

// URL이 /users 로 시작
import express from "express";
import { editUser, remove, logout, see } from "../controllers/userControllers";
const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", editUser);
userRouter.get("/remove", remove);
userRouter.get(":id", see);

export default userRouter;

import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

const userController = new UserController();
userRouter.get("/users", userController.getUser);
userRouter.post("/create", userController.create);

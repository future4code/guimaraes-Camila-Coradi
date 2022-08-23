import express from "express";
import { PostController } from "../controller/PostController";

export const postRouter = express.Router();
const postController = new PostController();

postRouter.post("/post", (req, res) => postController.createPost(req, res))

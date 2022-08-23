import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostDTO } from "../model/PostDTO";

export class PostController {
  createPost = async (
    req: Request, 
    res: Response) => 
    {
    let message = "Success!";
    try {
      const { photo, description, type, author_id } = req.body;

      const input: PostDTO = { photo, description, type, author_id };

      const postBusiness = new PostBusiness();
      await postBusiness.createPost(input);

      res.status(201).send({ message });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}

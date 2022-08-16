import { PostDTO } from "../model/PostDTO";
import { v4 as generateId } from "uuid";
import { Post } from "../model/Posts";
import { PostDatabase } from "../data/PostDatabase";
import { createMoment } from "../services/createMoment";

export class PostBusiness {
  async createPost(input: PostDTO): Promise<void> {
    let message = "Success!";
    let statusCode;
    const { photo, description, type, author_id } = input;

    if (!photo || !description || !type || !author_id) {
      message = '"photo", "description" "type" and "autor_id" must be provided';
      statusCode = 406;
      throw new Error(message);
    }
    const id = generateId();
    const created_at: string = createMoment();
    const post = new Post(id, photo, description, created_at, type, author_id);
    const postDB = new PostDatabase();
   
    await postDB.createPost(post);
    console.log(post)
    
  }
}

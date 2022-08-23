import { Post } from "../model/Posts";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {

  async createPost(post: Post): Promise<void> {
    await PostDatabase.connection("labook_posts")
      .insert({
        id:post.getId(),
        photo:post.getPhoto(),
        description:post.getDescription(),
        created_at:post.getCreationDate(),
        type:post.getType(),
        author_id:post.getAutorId()
      })
      }
  }
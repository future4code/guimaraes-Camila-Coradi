import { POST } from "./Posts";

export interface PostDTO {
  photo: string;
  description: string;
  type: POST;
  author_id: string;
}

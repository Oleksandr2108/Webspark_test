import { Post } from "@/types/Post";
import posts from "@/data/posts.json";

export function getPosts(): Post[] {
  return posts;
}

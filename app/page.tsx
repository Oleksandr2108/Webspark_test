import { getPosts } from "@/lib/getPosts";
import HomePage from "@/components/HomePage/HomePage";

export default function Home() {
  const posts = getPosts();
  return (
    <>
      <HomePage posts={posts} />
    </>
  );
}

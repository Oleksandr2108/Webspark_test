import { getPosts } from "@/lib/getPosts";
import HomePage from "@/components/HomePage/HomePage";

export default function Home() {
  const posts = getPosts();
  const dates = posts.map((item) => new Date(item.imageUpload));
  const minDate = new Date(Math.min(...dates.map((d) => d.getTime())));
  const maxDate = new Date(Math.max(...dates.map((d) => d.getTime())));
  return (
    <>
      <HomePage
        posts={posts}
        maxDate={maxDate}
        minDate={minDate}
      />
    </>
  );
}

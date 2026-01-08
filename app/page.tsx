import Header from "@/components/Header/Header";
import Back1 from "@/assets/image/back1.svg";
import Back2 from "@/assets/image/back2.svg";
import Image from "next/image";
import { getPosts } from "@/lib/getPosts";
import CardList from "@/components/CardList/CardList";

export default function Home() {
  const posts = getPosts();
  return (
    <div className="relative h-screen">
      <Image
        src={Back1}
        alt=""
        className="absolute z-[-1]"
      />
      <Header />
      <Image
        src={Back2}
        alt=""
        className="fixed bottom-10 right-0 z-[-1]"
      />
      <CardList posts={posts} />
    </div>
  );
}

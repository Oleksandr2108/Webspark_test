"use client";

import { useState } from "react";
import Header from "@/components/Header/Header";
import Back1 from "@/assets/image/back1.svg";
import Back2 from "@/assets/image/back2.svg";
import Image from "next/image";
import CardList from "@/components/CardList/CardList";
import { Post } from "@/types/Post";

interface HomePageProps {
  posts: Post[];
}
const HomePage = ({ posts }: HomePageProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  return (
    <div className="relative h-screen">
      <Image
        src={Back1}
        alt=""
        className="absolute z-[-1]"
      />
      <Header
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />
      <Image
        src={Back2}
        alt=""
        className="fixed bottom-10 right-0 z-[-1]"
      />
      <CardList posts={posts} startDate={startDate} endDate={endDate}/>
    </div>
  );
};

export default HomePage;

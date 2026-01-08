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
    <div className="relative min-h-screen overflow-x-hidden">
      
      <Image
        src={Back1}
        alt=""
        className="absolute z-[-1] hidden md:block"
      />
      <Image
        src={Back2}
        alt=""
        className="fixed bottom-10 right-0 z-[-1] hidden md:block"
      />

    
      <Header
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
      />

      
      <div className="px-4 md:px-0">
     
        <CardList posts={posts} startDate={startDate} endDate={endDate}/>
      </div>
    </div>
  );
};

export default HomePage;

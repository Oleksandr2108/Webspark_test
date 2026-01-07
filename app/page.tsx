import Header from "@/components/Header/Header";
import Back1 from "@/assets/image/back1.svg";
import Back2 from "@/assets/image/back2.svg";
import Image from "next/image";
export default function Home() {
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
        className="absolute bottom-10 right-0 z-[-1]"
      />
    </div>
  );
}

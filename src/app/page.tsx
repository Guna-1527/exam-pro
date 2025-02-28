"use client";

import { useRouter } from "next/navigation";
import { Navbar, Hero, Guide } from "@/app/component/index";

const Home = () => {
  const router = useRouter();

  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
        <Hero />
        <Guide />
      </div>
    </div>
  );
};

export default Home;

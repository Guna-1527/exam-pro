"use client";

import { useRouter } from "next/navigation";
import { Navbar, Hero } from "@/app/component/index";

const Home = () => {
  const router = useRouter();

  return (
    <div>
      <div>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;

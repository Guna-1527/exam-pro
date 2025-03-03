"use client";

import { useRouter } from "next/navigation";
import { Navbar, Hero, Guide } from "@/app/components/index";
import Footer from "./components/Footer";

const Home = () => {
  const router = useRouter();

  return (
    <div className="overflow-x-hidden">
      <div>
        <Navbar />
        <Hero />
        <Guide />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

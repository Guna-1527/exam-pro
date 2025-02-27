"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Navbar from "@/app/component/Navbar";

const Home = () => {
  const router = useRouter();

  const handleRoute = () => {
    router.push("/auth/signup");
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Button variant="outline" onClick={handleRoute}>
        Button
      </Button>
    </div>
  );
};

export default Home;

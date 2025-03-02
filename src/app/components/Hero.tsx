"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import success from "../../../public/asset/img/Business-profit-growth-to-success-vector-Graphics-3860893-1.jpg";

const Hero = () => {
  const router = useRouter();

  const handleConnectWithUs = () => {
    router.push("/auth/signup");
  };
  return (
    <div className="w-screen h-screen">
      <div className="flex">
        <div className="w-full gap-4 p-12 h-screen flex flex-1 justify-center items-start flex-col">
          <div className="flex flex-col gap-3">
            <div className=" flex gap-3">
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
            </div>
            <div className=" flex gap-3">
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
            </div>
            <div className=" flex gap-3">
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
            </div>
          </div>
          <h1 className="text-5xl font-bold">
            Empower your learning with seamless, secure, and real-time online
            exams!
          </h1>
          <p className="text-slate-400">
            Grow your business to the next level to improve your business
            performance to stay competitive Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sunt, nihil.
          </p>
          <button
            onClick={handleConnectWithUs}
            className="px-3 font-semibold rounded-md py-2 mt-3 bg-[#FCA510] border-2 border-[#FCA510] hover:text-[#FCA510] hover:bg-[#ffedce] text-white shadow-md"
          >
            Connect with us
          </button>
        </div>
        <div className="right flex items-end mr-10 justify-center flex-1 flex-col">
          <div className="flex flex-col gap-3">
            <div className=" flex gap-3">
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
            </div>
            <div className=" flex gap-3">
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
            </div>
            <div className=" flex gap-3">
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
              <div className="w-[5px] h-[5px] rounded-full bg-slate-400"></div>
            </div>
          </div>
          <Image src={success} alt="success" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

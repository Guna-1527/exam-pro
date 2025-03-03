"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../public/asset/img/exam-png-transparent-image.png";
import { Timer, ChevronRight, ChevronLeft } from "lucide-react";

interface QuestionProps {
  questions: string;
  options: string[];
  correctAnswer: string;
}

const Question: React.FC<QuestionProps> = ({ questions, options }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="font-title bg-gray-100">
      {/* Navbar */}
      <div className="w-screen h-[40px] bg-gray-300 flex justify-between items-center px-6 md:px-10">
        <div className="flex items-center gap-3">
          <button
            className="bg-gray-700 text-white p-1 rounded-full"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? (
              <ChevronLeft size={20} />
            ) : (
              <ChevronRight size={20} />
            )}
          </button>
          <Image
            src={Logo}
            alt="logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="text-sm md:text-base">WeSP</p>
        </div>
        <div className="flex gap-2 items-center justify-center w-[100px] h-[30px]">
          <Timer />
          <p className="text-sm">00:00:00</p>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`top-[40px] flex flex-col justify-between left-0 h-[calc(100vh-40px)] transition-all bg-gray-300 duration-300 z-50 ${
            isSidebarOpen ? "w-[250px]" : "w-[60px]"
          } p-4`}
        >
          <div>
            <p
              className={`mb-2 text-sm md:text-base ${
                isSidebarOpen ? "" : "hidden"
              }`}
            >
              Questions
            </p>
            <div
              className={`flex gap-4 flex-wrap ${
                isSidebarOpen ? "" : "hidden"
              }`}
            >
              show question
            </div>
          </div>
          <div className="flex w-full bg-blue-500 text-white p-1 rounded-md justify-center border-2 border-blue-500">
            <button>Submit</button>
          </div>
        </div>

        {/* Main Quiz Section */}
        <div
          className={`transition-all flex flex-col justify-between h-[calc(100vh-40px)] duration-300 p-4 ${
            isSidebarOpen ? "w-[70%]" : "ml-0 w-full"
          }`}
        >
          <div>
          <div className="shadow-lg p-2 bg-white rounded-lg">
            <div className="rightHeader">
              <p className="mb-1 text-sm md:text-base">Header</p>
              <hr />
            </div>
            <div className="questionsBox h-[150px] mt-5 font-normal text-sm md:text-base">
              <p>{questions}</p>
            </div>
          </div>
          <hr />
          <div className="options">
            <p className="text-sm md:text-base mt-4">Options</p>
            <div className="flex flex-col gap-2 mt-4">
              {options.map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-2 p-2 border rounded-md cursor-pointer transition-all text-sm md:text-base
                    ${
                      selectedOption === option
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                    }`}
                >
                  <input
                    type="radio"
                    name="radioGroup"
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleRadioChange}
                    className="hidden"
                  />
                  {/* Radio Button UI */}
                  <div
                    className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border flex items-center justify-center transition-all
                      ${
                        selectedOption === option
                          ? "border-white bg-white"
                          : "border-gray-500 bg-transparent"
                      }`}
                  >
                    <div
                      className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all
                        ${
                          selectedOption === option
                            ? "bg-blue-500"
                            : "bg-transparent"
                        }`}
                    ></div>
                  </div>
                  {option}
                </label>
              ))}
            </div>
          </div>
          </div>
            <div className="flex justify-between px-6">
              <button className="bg-blue-500 text-white p-2 rounded-lg">previous</button>
              <button className="bg-blue-500 text-white p-2 rounded-lg">next</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Question;

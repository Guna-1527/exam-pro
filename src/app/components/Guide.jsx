import React from "react";
import Image from "next/image"
import SignUp from "../../../public/asset/img/signup.jpg";


/*

USE TIMELINE FROM DAISY UI FOR THIS PAGE
right down all the requirements for the application then proceeds

*/
const Guide = () => {
  return (
    <div className="w-screen h-screen bg-[#FBA510] pt-20 px-20 font-title">
      <h1 className="font-bold text-4xl text-white">How to Get Start?</h1>
      <div className="main mt-16 flex gap-8 justify-center items-center">
        <div className="step1">
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <Image src={SignUp} alt="signup" className="object-center"/>
            </figure>
            <div className="card-body flex flex-col justify-center items-center text-center">
              <h2 className="card-title ">Step 1</h2>
              <p>Enter the Email Id and Password or with google account </p>
            </div>
          </div>
        </div>
        <div className="step1">
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <Image src={SignUp} alt="signup" className="object-center"/>
            </figure>
            <div className="card-body flex flex-col justify-center items-center text-center">
              <h2 className="card-title text-center">Step 2</h2>
              <p className="text-center">Choose the exam you want to prepare</p>
            </div>
          </div>
        </div>
        <div className="step1">
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <Image src={SignUp} alt="signup" className="object-center"/>
            </figure>
            <div className="card-body flex flex-col justify-center items-center text-center">
              <h2 className="card-title">step 3</h2>
              <p>Start preparing for the exam. Let's crack it!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;

import React from "react";
import Image from "next/image"
import SignUp from "../../../public/asset/img/signup.jpg";

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
            <div className="card-body">
              <h2 className="card-title">Step 1</h2>
              <p>Enter the Email Id and Password or with google account </p>
            </div>
          </div>
        </div>
        <div className="step1">
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <Image src={SignUp} alt="signup" className="object-center"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="step1">
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <Image src={SignUp} alt="signup" className="object-center"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="step2"></div>
        <div className="step3"></div>
      </div>
    </div>
  );
};

export default Guide;

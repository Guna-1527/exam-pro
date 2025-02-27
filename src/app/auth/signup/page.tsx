"use client";

import Link from "next/link";
import Image from "next/image";
import sign from "../../../../public/asset/img/dd.png";
import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/app/lib/Firebase";
import { setDoc, doc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: any) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: firstName,
          lastName: lastName,
        });
        toast.success("Sign up successfully");
        router.push("/student/dashboard");
      }
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row font-title">
      {/* Left Side Form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-14 space-y-8 md:space-y-10">
        {/* Header */}
        <div className="w-full flex justify-between items-center mb-8">
          <img
            className="w-10 h-10"
            src="https://i.pinimg.com/736x/7c/5d/69/7c5d690c36b14aa2f341b2ebed2695ef.jpg"
            alt="Logo"
          />
          <div className="text-sm flex gap-1">
            <p>Already have an account?</p>
            <Link
              href="/auth/login"
              className="font-bold text-neutral-600 hover:text-neutral-800"
            >
              Join
            </Link>
          </div>
        </div>

        {/* Sign Up Form */}
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-3xl font-bold text-center">Sign Up</h1>

          {/* Name Input Fields */}
          <div className="flex gap-4 flex-col sm:flex-row">
            <div className="flex-1 space-y-2">
              <label className="text-sm font-bold">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="input w-full px-4 py-2 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1 space-y-2">
              <label className="text-sm font-bold">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input w-full px-4 py-2 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Email and Password Fields */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-bold">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full px-4 py-2 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input w-full px-4 py-2 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 text-right">
                Forgot password?
              </p>
            </div>
          </div>

          <button
            onClick={handleRegister}
            className="w-full py-3 bg-[#2B3440] text-white font-semibold text-sm rounded-md hover:bg-blue-600 transition"
          >
            Create Account
          </button>
        </div>

        {/* Sign-in Options */}
        <div className="mt-6 w-full flex justify-center items-center space-x-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-xs">
            <img
              className="w-5 h-5"
              src="https://app.uizard.io/static/media/google.c17df322b408a9f3f31c4bc735c95e04.svg"
              alt="Google Logo"
            />
            Log in with Google
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-xs">
            <img
              className="w-5 h-5"
              src="https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png"
              alt="Microsoft Logo"
            />
            Log in with Microsoft
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="hidden md:flex bg-gray-800 justify-center items-center flex-1">
        <div className="w-4/5">
          <Image src={sign} alt="Sign Up Illustration" layout="intrinsic" />
        </div>
      </div>

      {/* Toast Notification */}
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default SignUp;

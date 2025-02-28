"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { auth } from "../lib/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/asset/img/exam-png-transparent-image.png";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  console.log(user);
  const handleRegister = () => {
    router.push("/auth/signup");
  };
  const handleLogin = () => {
    router.push("/auth/login");
  };

  const handleProfile = () => {
    router.push("/student/profile");
  };

  return (
    <div className="navbar bg-base-400 px-5 shadow-md">
      <div className="navbar-start px-5">
        <div className="navbar-center flex gap-1">
          <Image
            src={Logo}
            alt="logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <Link href="/" className="btn btn-ghost text-xl font-bold">
            We<span className="text-[#FCA510]">SP</span>
          </Link>
        </div>
      </div>

      <div className="navbar-end flex gap-2 pr-3">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        {!user ? (
          <div className="flex gap-4">
            <button
              className="bg-[#ffedce] px-4 py-2 rounded-md text-[#FCA510] font-semibold text-sm"
              onClick={handleLogin}
            >
              Login
            </button>
            <button
              className="bg-[#FCA510] px-4 py-2 rounded-md text-white font-semibold text-sm"
              onClick={handleRegister}
            >
              Signup
            </button>
          </div>
        ) : (
          <div onClick={handleProfile} className="cursor-pointer">
            <div className="avatar w-[24px] h-[24px]">
              <div className="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

/*

<div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div> 

*/

"use client";

import { auth, db } from "@/app/lib/Firebase";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../../component/Navbar";
const Profile = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  /*if (!user) {
    router.push("/auth/login");
  }*/

  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success("Logged out successfully");
      router.push("/auth/login");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="font-title ">
      <div className="nav">
        <Navbar />
      </div>
      <div>
        <div className="body flex flex-row w-screen mt-[80px]">
          <div className="flex w-screen justify-center items-center">
            <div className="p-6 flex max-w-5x w-[1024px] justify-center items-start gap-20 rounded-md shadow-2xl">
              <div className="flex flex-col gap-4 flex-1 justify-center">
                <div className="avatar">
                  <div className="w-24 h-24 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex flex-col flex-1 gap-2">
                    <label className="font-sans text-[12px] font-semibold">
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="first name"
                      className="input text-xs h-10 border-2 border-[#F5F5F5] rounded-md w-full max-w-xs"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <label className="font-sans text-[12px] font-semibold">
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="last name"
                      className="input text-xs h-10 border-2 border-[#F5F5F5] rounded-md w-full max-w-xs"
                    />
                  </div>
                </div>
                <div className="w-full flex gap-2 flex-col">
                  <label className="font-sans text-[12px] font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input text-xs h-10 border-2 border-[#F5F5F5] rounded-md w-full"
                  />
                </div>
                <div className="address w-full flex gap-2 flex-col">
                  <label className="font-sans text-[12px] font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input text-xs h-10 border-2 border-[#F5F5F5] rounded-md w-full"
                  />
                </div>
                <div className="address w-full flex gap-2 flex-col">
                  <label className="font-sans text-[12px] font-semibold">
                    Phone
                  </label>
                  <input
                    type="number"
                    placeholder="phone number"
                    className="input text-xs h-10 border-2 border-[#F5F5F5] rounded-md w-full"
                  />
                </div>
              </div>
              <div className="right flex flex-col gap-4 flex-1">
                <div className="w-full h-24 flex justify-end items-start">
                  <button
                    onClick={handleLogout}
                    className="btn bg-red-800 text-white hover:bg-red-900 hover:shadow-sm"
                  >
                    Logout
                  </button>
                </div>
                <div className="flex gap-5">
                  <div className="flex flex-col flex-1 gap-2">
                    <label className="font-sans text-[12px] font-semibold">
                      Gender
                    </label>
                    <input
                      type="text"
                      placeholder="first name"
                      className="input text-xs h-10 border-2 border-[#F5F5F5] rounded-md w-full"
                    />
                  </div>
                  <div className="flex flex-col flex-1 gap-2">
                    <label className="font-sans text-[12px] font-semibold">
                      Language
                    </label>
                    <input
                      type="text"
                      placeholder="last name"
                      className="input text-xs h-10 border-2 border-[#F5F5F5] rounded-md w-full"
                    />
                  </div>
                </div>
                <div className="w-full flex gap-2 flex-col">
                  <label className="font-sans text-[12px] font-semibold">
                    Date of Birth
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input text-xs h-10 border-2 border-[#F5F5F5] rounded-md w-full"
                  />
                </div>
                <div className="address w-full flex gap-2 flex-col">
                  <label className="font-sans text-[12px] font-semibold">
                    Linked In
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input text-xs h-10 border-2 border-[#F5F5F5] rounded-md w-full"
                  />
                </div>
                <div className="address w-full flex gap-2 flex-col">
                  <label className="font-sans text-[12px] font-semibold">
                    Phone
                  </label>
                  <input
                    type="number"
                    placeholder="phone number"
                    className="input text-xs h-10 border-2 border-[#F5F5F5] rounded-md w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

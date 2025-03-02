"use client";

import { auth } from "@/app/lib/Firebase";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../../components/Navbar";

const Profile = () => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  if (!user) {
    router.push("/student/dashboard");
  }

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
    <div className="font-title flex flex-col min-h-screen">
      {/* Navbar at Top */}
      <Navbar />

      {/* Centered Body */}
      <div className="flex flex-grow justify-center items-center p-6">
        <div className="p-6 flex max-w-5xl w-[1024px] justify-center items-start gap-10 rounded-md shadow-2xl bg-white">
          {/* Left Section */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="avatar flex justify-center">
              <div className="w-24 h-24 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col flex-1 gap-2">
                <label className="text-sm font-semibold">First Name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="input text-sm h-10 border-2 border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label className="text-sm font-semibold">Last Name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="input text-sm h-10 border-2 border-gray-300 rounded-md w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="input text-sm h-10 border-2 border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Phone</label>
              <input
                type="number"
                placeholder="Phone number"
                className="input text-sm h-10 border-2 border-gray-300 rounded-md w-full"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="w-full flex justify-end">
              <button
                onClick={handleLogout}
                className="btn bg-red-800 text-white hover:bg-red-900"
              >
                Logout
              </button>
            </div>

            <div className="flex gap-5">
              <div className="flex flex-col flex-1 gap-2">
                <label className="text-sm font-semibold">Gender</label>
                <input
                  type="text"
                  placeholder="Gender"
                  className="input text-sm h-10 border-2 border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label className="text-sm font-semibold">Language</label>
                <input
                  type="text"
                  placeholder="Language"
                  className="input text-sm h-10 border-2 border-gray-300 rounded-md w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">Date of Birth</label>
              <input
                type="date"
                className="input text-sm h-10 border-2 border-gray-300 rounded-md w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">LinkedIn</label>
              <input
                type="text"
                placeholder="LinkedIn Profile"
                className="input text-sm h-10 border-2 border-gray-300 rounded-md w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

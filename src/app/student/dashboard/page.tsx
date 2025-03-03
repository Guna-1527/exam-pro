"use client";

import Navbar from "../../components/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "@/app/lib/Firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

const StudentDashboard = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      const fetchCourses = async () => {
        const q = query(collection(db, "enrolledCourses"), where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const enrolledCourses = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCourses(enrolledCourses);
      };
      fetchCourses();
    }
  }, [user]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="font-title flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex-grow container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome, {user?.displayName || "Student"}!</h1>
        
        {/* Continue Course Section */}
        {courses.length > 0 && (
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Continue Your Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => (
                <div key={course.id} className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p>{course.description}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Continue
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">My Courses</h2>
            <p>View and manage your enrolled courses.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Upcoming Quizzes</h2>
            <p>Check your scheduled quizzes and exams.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Performance</h2>
            <p>Analyze your quiz results and progress.</p>
          </div>
        </div>
        
        {/* Additional Feature: Announcements Section */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Latest Announcements</h2>
          <p>No new announcements at the moment.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

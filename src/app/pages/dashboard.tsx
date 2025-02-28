"use client";

import Layout from '../component/Layout';

const Dashboard = () => {
  return (
    <Layout>
      <div className="bg-white p-6 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p>Welcome to the exam management dashboard.</p>
        <div className="mt-6 grid grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold">Total Exams</h2>
            <p>10</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold">Total Results</h2>
            <p>250</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold">Active Users</h2>
            <p>500</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

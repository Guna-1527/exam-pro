import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Admin Dashboard</h1>
      <ul>
        <li>
          <Link href="/dashboard">
            <a className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/exams">
            <a className="block py-2 px-4 rounded hover:bg-gray-700">Exams</a>
          </Link>
        </li>
        <li>
          <Link href="/results">
            <a className="block py-2 px-4 rounded hover:bg-gray-700">Results</a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a className="block py-2 px-4 rounded hover:bg-gray-700">Users</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

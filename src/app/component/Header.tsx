const Header = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h2 className="text-xl">Exam Admin Panel</h2>
      <div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;

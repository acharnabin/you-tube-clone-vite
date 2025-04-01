import React from "react";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex items-center justify-between  w-full top-0 z-10">
      <div className="flex items-center space-x-4">
        <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        <span className="text-xl font-semibold text-gray-900 dark:text-white">
          MyTube
        </span>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 w-1/3 border rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none"
      />
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
          🔔
        </button>
        <button className="p-2 rounded-full bg-gray-100 dark:bg-gray-700">
          👤
        </button>
      </div>
    </header>
  );
};

export default Header;

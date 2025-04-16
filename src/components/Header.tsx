import React from "react";
import { Icon } from "@iconify/react";

const Logo = () => {
  return (
    <svg
      width="150"
      height="40"
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cart Icon */}
      <g transform="translate(0, 5)">
        <circle cx="10" cy="25" r="2.5" fill="#3B82F6" />
        <circle cx="20" cy="25" r="2.5" fill="#3B82F6" />
        <path
          d="M2 2h4l4 14h13l3-9H7"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
        />
      </g>

      {/* Text */}
      <text
        x="40"
        y="28"
        fontFamily="Segoe UI, sans-serif"
        fontSize="20"
        fill="#fff"
        fontWeight="bold"
      >
        ShopEase
      </text>
    </svg>
  );
};



const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex items-center justify-between w-full top-0 z-10">
      {/* Logo + Brand */}
      <div className="flex items-center space-x-3">
        <Logo/>
       
      </div>

      {/* Search Bar */}
      <div className="flex-grow mx-6">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full px-4 py-2 border rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Action Icons */}
      <div className="flex items-center space-x-4">
        <button
          title="Wishlist"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <Icon icon="mdi:heart-outline" className="text-2xl text-gray-800 dark:text-white" />
        </button>
        <button
          title="Cart"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <Icon icon="mdi:cart-outline" className="text-2xl text-gray-800 dark:text-white" />
        </button>
        <button
          title="Notifications"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <Icon icon="mdi:bell-outline" className="text-2xl text-gray-800 dark:text-white" />
        </button>
        <button
          title="Account"
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <Icon icon="mdi:account-circle-outline" className="text-2xl text-gray-800 dark:text-white" />
        </button>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Link } from "react-router"; 

const Sidebar = ({ open }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 z-40 transform transition-transform duration-300 ease-in-out 
        ${open ? "translate-x-0" : "-translate-x-full"} 
        w-60 overflow-y-auto`}
    >
      <nav className="p-4 text-sm font-medium text-gray-700">
      
        <ul className="space-y-1">
          <li>
            <Link
              to="/"
              className="block px-3 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/shorts"
              className="block px-3 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Shorts
            </Link>
          </li>
          <li>
            <Link
              to="/subscriptions"
              className="block px-3 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Subscriptions
            </Link>
          </li>
        </ul>

        <hr className="my-4 border-gray-200" />

        <ul className="space-y-1">
          <li>
            <Link
              to="/library"
              className="block px-3 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Library
            </Link>
          </li>
          <li>
            <Link
              to="/history"
              className="block px-3 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              History
            </Link>
          </li>
          <li>
            <Link
              to="/liked"
              className="block px-3 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Liked videos
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
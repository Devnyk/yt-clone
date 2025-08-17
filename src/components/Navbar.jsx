

const Navbar = ({ onToggleSidebar }) => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white shadow-md sticky top-0 z-50">
  
      <div className="flex items-center gap-4">
      
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <a href="/" className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
            className="h-5"
          />
        </a>
      </div>

      <div className="hidden md:flex items-center flex-1 max-w-2xl mx-4">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 border border-gray-300 rounded-l-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <button
          className="px-4 py-2 border border-gray-300 border-l-0 bg-gray-50 rounded-r-full hover:bg-gray-100 transition"
          aria-label="Search"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
            />
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-4">
        
        <button
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Create"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>

        <button
          className="p-2 rounded-full hover:bg-gray-100 transition"
          aria-label="Notifications"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-5-5.917V4a2 2 0 10-4 0v1.083A6 6 0 004 11v3.159c0 .538-.214 1.055-.595 1.436L2 17h5m8 0a3.001 3.001 0 01-6 0m6 0H9"
            />
          </svg>
        </button>

        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
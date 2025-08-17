import { Menu, Bell, Video, PlusCircle, Search } from "lucide-react";
import dp from "../assets/devmy.jpg"

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-red-500 shadow-md sticky top-0 z-50">
      
      {/* LEFT: Menu + Logo */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/20 rounded-full">
          <Menu className="text-white" />
        </button>
        <h1 className="text-white text-xl font-bold">YouTube</h1>
      </div>

      {/* CENTER: Search Bar */}
      <div className="flex items-center flex-1 max-w-2xl mx-6">
        <div className="flex w-full items-center bg-white rounded-full shadow-sm overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 text-sm text-gray-700 outline-none"
          />
          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200">
            <Search className="text-gray-600" size={18} />
          </button>
        </div>
      </div>

      {/* RIGHT: Icons + Profile */}
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/20 rounded-full">
          <PlusCircle className="text-white" />
        </button>
        <button className="p-2 hover:bg-white/20 rounded-full">
          <Video className="text-white" />
        </button>
        <button className="p-2 hover:bg-white/20 rounded-full">
          <Bell className="text-white" />
        </button>
        <img
          src={dp}
          alt="profile"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </div>
    </header>
  );
}

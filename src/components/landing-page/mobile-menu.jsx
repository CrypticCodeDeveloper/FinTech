import { XIcon, Menu } from "lucide-react";
import { useState } from "react";

import { navLinks } from "../../constants/static";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-white focus:outline-none lg:hidden"
      >
        <Menu className="size-8" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-purple-800 text-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <XIcon className="text-white size-9 font-bold" />
          </button>
        </div>

        <div className="ml-4">
          <h1 className="font-semibold text-2xl text-white">
            <span className="text-3xl bg-white text-purple-800 px-2 rounded-md">
              Z
            </span>
            pay
          </h1>
          <p className="mt-3 text-gray-300">Your all in one banking app</p>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col space-y-4 p-6">
          {navLinks.map((navLink, index) => (
            <NavLink
              to={navLink.to}
              key={`${navLink.label}-${index}`}
              className={({ isActive }) => `${
                isActive
                  ? "font-semibold text-white text-lg"
                  : "text-gray-300"
              }`}
            >
              {navLink.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;

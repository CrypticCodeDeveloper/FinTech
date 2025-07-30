import {
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const Navbar = () => {

  const navLinks = [
    {
      label: "Home",
      to: "/"
    },
    {
      label: "About us",
      to: "/about"
    },
    {
      label: "Contact",
      to: "/contact"
    },
    {
      label: "Pricing",
      to: "/pricing"
    }
  ]

  return (
    <div className="w-full justify-between px-5 flex p-4">
        <div>
            <h1 className="font-semibold text-2xl text-white">
              <span className="text-3xl bg-purple-900 px-2 rounded-md">Z</span>
              pay
            </h1>
        </div>

        <div className="flex items-center gap-8">
            <div className="flex items-center gap-5">
                {
                  navLinks.map((navLink) => <NavLink to={navLink.to} 
                  className={({isActive}) => `${isActive ? "font-semibold text-purple-800 text-lg" : "text-gray-300"} hover:text-purple-800 hover:underline 
                  hover:underline-offset-4`} >{navLink.label}</NavLink>)
                }
            </div>

            <div>
                <button className="bg-purple-800 p-2 px-4 rounded-full text-white font-semibold cursor-pointer hover:bg-purple-900">GET STARTED</button>
            </div>
        </div>
    </div>
  );
};

export default Navbar;

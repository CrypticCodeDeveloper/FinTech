import { NavLink } from "react-router-dom";
import { Linkedin, Instagram, Facebook } from "lucide-react";

const sections = [
  {
    title: "Quick Links",
    links: [
      {
        label: "Home",
        to: "/",
      },
      {
        label: "About us",
        to: "/",
      },
      {
        label: "Contact",
        to: "/",
      },
      {
        label: "Pricing",
        to: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="text-white border-t px-8 border-gray-400 py-5 max-w-[1200px] mx-auto pb-10">
      <div className="flex flex-col md:flex-row lg:items-center justify-between">
        <div>
          <h1 className="font-semibold text-2xl text-white">
              <span className="text-3xl bg-purple-900 px-2 rounded-md">D</span>ivvy<span className="font-bold">Up</span>
            </h1>
          <p className="text-sm text-gray-300 max-w-[350px] mt-2">
            No more awkward money talk. Just smooth bill splits, clear records, and instant settling — built for everyday Nigerians.
          </p>
        </div>

        <div>
          {sections.map((section, i) => (
            <div className="max-lg:my-5" key={`${section.title}-${i}`}>
              <h2 className="font-semibold text-lg text-purple-800">
                {section.title}
              </h2>
              <ul className="mt-1 space-x-2">
                {section.links.map((link, i) => (
                  <li key={`${link.label}-${i}`}>
                    <NavLink
                      className="hover:text-purple-800 hover:font-semibold transition-all"
                      to={link.to}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col lg:flex-row gap-4 justify-between">
        <p className="text-gray-300">
          All right reserved {new Date().getFullYear()}{" "}
        </p>
        <div className="flex items-center gap-3">
          <Linkedin className="text-purple-800 size-8" />
          <Facebook className="text-purple-800 size-8" />
          <Instagram className="text-purple-800 size-8" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

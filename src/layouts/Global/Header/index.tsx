import React from "react";
import { useState } from "react";
import { navigationLinks } from "./data";
import { signOut } from "next-auth/react";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  return (
    <header className="  text-white">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between ">
        <div className="flex items-center mt-4 lg:mt-0">
          <div className="text-2xl font-bold ">Your Logo</div>
        </div>
        <nav className="mt-4 lg:mt-0">
          <ul className="flex flex-wrap items-center lg:flex-row  lg:space-y-0 lg:space-x-4 gap-2">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-gray-300">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { Link } from "gatsby";

const activeLinkClass = "border-b-2 border-jordyBlue-600";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="px-4 bg-opacity-0 text-navText">
      <div className="max-w mx-auto ">
        <div className="flex justify-between py-4 font-roboto-mono">
          <Link className="text-3xl text-navText hover:bg-red-500" to="/">
            Chris
          </Link>
          <div className="hidden md:flex items-center text-lg space-x-6 ">
            <Link
              to="/profile"
              className="hover:bg-red-500"
              activeClassName={activeLinkClass}
            >
              Profile
            </Link>
            <Link
              to="/projects"
              className="hover:bg-red-500"
              activeClassName={activeLinkClass}
            >
              Projects
            </Link>
            <button onClick={() => console.log("resume link")}>Resume</button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
          </div>
        </div>
      </div>
      <div className={menuOpen ? null : "hidden"}>
        <Link
          to="/profile"
          className="block py-2 px-4 text-sm hover:bg-red-500"
        >
          Profile
        </Link>
        <Link
          to="/projects"
          className="block py-2 px-4 text-sm hover:bg-red-500"
        >
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

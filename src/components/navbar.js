import React, { useState } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="px-8 bg-opacity-0">
      <div className="max-w mx-auto ">
        <div className="flex justify-between py-4 font-roboto-mono">
          <Link to="/">Chris</Link>
          <div className="hidden md:flex">
            <Link to="/profile">Profile</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
          </div>
        </div>
      </div>
      <div className={menuOpen ? null : "hidden"}>
        <div className="block py-2 px-4 text-sm hover:bg-red-400">Hello</div>
        <div className="block py-2 px-4 text-sm hover:bg-red-400">Hello</div>
      </div>
    </nav>
  );
};

export default Navbar;

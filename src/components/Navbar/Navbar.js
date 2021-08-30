import React, { useState } from "react";
import { Link } from "gatsby";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const styleClasses = {
  active: "border-b-2 border-jordyBlue-600",
  mobLink:
    "block py-2 px-4 text-navText text-md hover:bg-red-500 font-roboto-mono",
  hoverLink: "hover:bg-red-500 text-lg",
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMediaQueryChange = (matches) => {
    if (!matches) {
      setMenuOpen(false);
    }
  };

  const isTabletOrMobile = useMediaQuery(
    { maxWidth: 768 },
    undefined,
    handleMediaQueryChange
  );

  return (
    <nav className="px-4 bg-opacity-0 text-navText">
      {/* function to tell the app if the view is mobile */}
      {isTabletOrMobile}
      <div className="max-w mx-auto">
        <div className="flex items-center justify-between py-4 font-roboto-mono">
          <Link className="text-3xl text-navText hover:bg-red-500" to="/">
            Chris
          </Link>
          <div className="hidden md:flex items-center space-x-6 ">
            <Link
              to="/profile"
              className={styleClasses.hoverLink}
              activeClassName={styleClasses.active}
            >
              Profile
            </Link>
            <Link
              to="/projects"
              className={styleClasses.hoverLink}
              activeClassName={styleClasses.active}
            >
              Projects
            </Link>
            <a
              className="py-2 px-4 rounded bg-gray-500 border border-white hover:bg-white hover:border-gray-500 focus:outline-none"
              href={"/public/static/documents/chris_tri_cv.pdf"}
              alt="downlod-resume"
              download="Christopher Tri - CV.pdf"
            >
              Download Resume
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              size="2x"
              className="cursor-pointer"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            />
          </div>
        </div>
      </div>

      <div className={menuOpen ? null : "hidden"}>
        <Link to="/profile" className={styleClasses.mobLink}>
          Profile
        </Link>
        <Link to="/projects" className={styleClasses.mobLink}>
          Projects
        </Link>
        <a
          className={`${styleClasses.mobLink} + cursor-pointer`}
          href={"/public/static/documents/chris_tri_cv.pdf"}
          alt="downlod-resume"
          download="Christopher Tri - CV.pdf"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

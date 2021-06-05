import * as React from "react";
import { Link } from "gatsby";
import GithubLogo from "../images/GitHub-Mark-64px.png";
import NavbarLink from "./NavbarLink";

const links = [
  { page: "resume", display: "Resume" },
  { page: "projects", display: "Projects" },
  { page: "contact", display: "Get in touch" },
];

const Navbar = () => {
  return (
    <div>
      <nav class="nav-bar">
        <div className="flex justify-between">
          <span className="flex flex-row">
            <span className="ml-3 transform transition duration-500 ease-in-out hover:scale-105 ">
              <Link className="text-4xl " to="/">
                Chris Tri
              </Link>
            </span>
          </span>
          <span className="flex flex-row self-end space-x-6 mr-3">
            {links.map((link) => {
              return (
                <NavbarLink
                  page={link.page}
                  display={link.display}
                  key={link}
                />
              );
            })}
            <span>Linkedin</span>
            <span>
              <a
                href="https://github.com/MomentaiChris26"
                target="_blank"
                rel="noreferrer"
              >
                <img className="h-6" src={GithubLogo} alt="github logo" />
              </a>
            </span>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

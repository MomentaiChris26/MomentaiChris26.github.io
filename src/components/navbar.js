import * as React from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import NavbarLink from "./NavbarLink";
import NavbarIcon from "./NavbarIcon";

const links = [
  { page: "", display: "Home" },
  { page: "resume", display: "About" },
  { page: "projects", display: "Projects" },
  { page: "contact", display: "Contact" },
];

const Navbar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="flex justify-between">
          <span className="flex flex-row">
            <span className="flex flex-row self-end space-x-6 ml-3">
              {links.map((link) => {
                return (
                  <NavbarLink
                    page={link.page}
                    display={link.display}
                    key={link.page}
                  />
                );
              })}
            </span>
          </span>
          <span className="flex flex-row self-end space-x-6 mr-3">
            <NavbarIcon
              url={"https://www.linkedin.com/in/christopherqtri/"}
              icon={faLinkedin}
            />
            <NavbarIcon
              url={"https://github.com/MomentaiChris26"}
              icon={faGithub}
            />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

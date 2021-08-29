import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavbarIcon = ({ url, icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="text-3xl hover:text-gray-500 transform transition duration-150 ease-in-out hover:scale-110"
    >
      <FontAwesomeIcon icon={icon} className="" />
    </a>
  );
};

export default NavbarIcon;

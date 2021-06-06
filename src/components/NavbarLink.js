import * as React from "react";
import { Link } from "gatsby";

const activePageStyle = {
  color: "white",
  backgroundColor: "#111827",
  padding: "2px 8px",
  borderRadius: "5px",
};

const NavbarLink = ({ page, display }) => {
  return (
    <Link
      to={`/${page}`}
      activeStyle={activePageStyle}
      className="hover:-translate-y-0.5 transform transition mt-1 py-0.5 text-xl"
    >
      {display}
    </Link>
  );
};

export default NavbarLink;

import * as React from "react";
import { Link } from "gatsby";

const activePageStyle = {
  color: "white",
  backgroundColor: "#111827",
  padding: "8px 10px",
  borderRadius: "5px",
};

const NavbarLink = ({ page, display }) => {
  return (
    <span className="hover:-translate-y-0.5 transform transition">
      <Link
        to={`/${page}`}
        className="hover:-translate-y-0.5 transform transition"
        activeStyle={activePageStyle}
      >
        {display}
      </Link>
    </span>
  );
};

export default NavbarLink;

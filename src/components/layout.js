import * as React from "react";
import { Link } from "gatsby";

const DefaultLayout = ({ children }) => {
  return (
    <main>
      <title>Chris Tri</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  );
};

export default DefaultLayout;

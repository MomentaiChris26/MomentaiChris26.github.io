import * as React from "react";
import Navbar from "./navbar";

const DefaultLayout = ({ children }) => {
  return (
    <main>
      <div>
        <title>Chris Tri</title>
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default DefaultLayout;

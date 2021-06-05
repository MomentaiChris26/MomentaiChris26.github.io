import * as React from "react";
import Navbar from "./navbar";

const DefaultLayout = ({ children }) => {
  return (
    <main>
      <title>Chris Tri</title>
      <Navbar />
      {children}
    </main>
  );
};

export default DefaultLayout;

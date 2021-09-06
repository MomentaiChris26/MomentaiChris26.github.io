import * as React from "react";
import Navbar from "./Navbar/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <main>
      <div className="h-screen flex flex-col">
        <title>Chris Tri</title>
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default DefaultLayout;

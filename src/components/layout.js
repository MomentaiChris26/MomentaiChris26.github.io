import * as React from "react";
import Navbar from "./Navbar/Navbar";

const DefaultLayout = ({ children, path }) => {
  console.log(path);
  return (
    <main>
      <div className="h-screen flex flex-col">
        <title>Chris Tri</title>
        <Navbar path={path} />
        {children}
      </div>
    </main>
  );
};

export default DefaultLayout;

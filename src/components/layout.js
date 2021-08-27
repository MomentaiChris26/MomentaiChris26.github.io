import * as React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <main>
      <div className="h-screen flex flex-col">
        <title>Chris Tri</title>
        {children}
      </div>
    </main>
  );
};

export default DefaultLayout;

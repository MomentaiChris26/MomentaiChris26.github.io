import * as React from "react";
import DefaultLayout from "../components/layout";
import Navbar from "../components/Navbar";

const ResumePage = () => {
  return (
    <DefaultLayout>
      <div className="bg-aboutPage flex-grow">
        <Navbar />
        <p>About me</p>
        <p>Work experience</p>
      </div>
    </DefaultLayout>
  );
};

export default ResumePage;

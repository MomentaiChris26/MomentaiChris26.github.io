import React from "react";
import DefaultLayout from "../components/layout";
import Navbar from "../components/Navbar/Navbar";

const IndexPage = () => {
  return (
    <DefaultLayout>
      <div className="bg-homePage flex-grow">
        <Navbar />
      </div>
      {/* <div className="bg-profilePage h-screen"> </div>
        <div className="bg-projectPage h-screen"> </div> */}
    </DefaultLayout>
  );
};

export default IndexPage;

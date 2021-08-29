import * as React from "react";
import DefaultLayout from "../components/layout";
import Navbar from "../components/Navbar/Navbar";

const ProjectsPage = () => {
  return (
    <DefaultLayout>
      <div className="bg-projectPage flex-grow">
        <Navbar />
        <h1>Projects</h1>
      </div>
    </DefaultLayout>
  );
};

export default ProjectsPage;

import * as React from "react";
import DefaultLayout from "../components/layout";

const ProjectsPage = () => {
  return (
    <DefaultLayout>
      <div className="bg-projectPage flex-grow">
        <div className="flex h-4/5 items-center flex-col my-2">
          <h1 className="my-10 text-3xl text-white">Projects</h1>
          <div className="w-4/5 flex-grow bg-red-400">places</div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProjectsPage;

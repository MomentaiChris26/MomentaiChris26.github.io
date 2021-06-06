import * as React from "react";
import DefaultLayout from "../components/layout";
import MyPhoto from "../images/my-photo.jpeg";
import { Link } from "gatsby";
const IndexPage = () => {
  return (
    <DefaultLayout>
      <div className="px-4 py-8	mt-16 grid grid-col-1 gap-2">
        <div className="flex justify-center mb-8">
          <img
            src={MyPhoto}
            alt="myphoto"
            className="h-64 w-64 rounded-full object-center object-cover border-gray-600	border-solid border-2"
          ></img>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl font-semibold h-16">
            Hey there{" "}
            <span role="img" aria-label="emoji-hand">
              👋
            </span>
            ! I'm Chris.
          </div>
          <div className="text-xl h-12">
            Ex-accountant turned passionate software engineer.
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to="projects"
            className="text-white py-4 font-semibold px-5 rounded bg-gray-800 hover:bg-gray-700"
          >
            Check out my work
          </Link>
        </div>
        <div className="flex flex-col items-center mt-4 text-xl">
          Want to hire me? <Link to="about">Check out my resume</Link>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default IndexPage;

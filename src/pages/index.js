import React from "react";
import { navigate } from "gatsby";
import DefaultLayout from "../components/layout";
import Navbar from "../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";

const IndexPage = () => {
  return (
    <DefaultLayout>
      <div className="bg-homePage flex-grow">
        <Navbar />
        <div className="flex h-4/5">
          <div className="m-auto">
            <div className=" p-3.5 gap-9 text-white flex flex-col items-center ">
              <h1 className="text-7xl font-bold">Christopher Tri</h1>
              <p className="font-roboto-mono">
                <Typewriter
                  options={{
                    strings: "Ex-accountant turned full-stack developer",
                    autoStart: true,
                    loop: true,
                    delay: 90,
                    wrapperClassName: "font-roboto-mono",
                    cursorClassName: "text-orangeBtnText",
                  }}
                />
              </p>
              <button
                className="text-orangeBtnText font-bold text-lg p-4 border border-white hover:bg-gray-500 focus:outline-none"
                onClick={() => navigate("/projects")}
              >
                Learn more about me
              </button>

              <div className="flex gap-9">
                <a
                  href="https://www.linkedin.com/in/christopherqtri/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="3x"
                    className="cursor-pointer"
                  />
                </a>
                <a
                  href="https://github.com/MomentaiChris26/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="3x"
                    className="cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default IndexPage;

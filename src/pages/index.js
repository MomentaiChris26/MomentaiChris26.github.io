import React from "react";
import { navigate } from "gatsby";
import DefaultLayout from "../components/layout";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Typewriter from "typewriter-effect";
import { IconButton } from "../components/Homepage/IconButton";

const IndexPage = () => {
  return (
    <DefaultLayout>
      <div className="bg-homePage flex-grow">
        <div className="flex h-4/5">
          <div className="m-auto">
            <div className=" p-3.5 gap-9 text-white flex flex-col items-center">
              <h1 className="sm:text-7xl text-5xl font-bold" id="name-title">
                Christopher Tri
              </h1>
              <div id="typewrite-effect" className="hidden xs:flex">
                <Typewriter
                  options={{
                    strings: "Ex-accountant turned full-stack developer",
                    autoStart: true,
                    loop: true,
                    delay: 90,
                    wrapperClassName:
                      "font-roboto-mono sm:text-lg text-sm text-center",
                    cursorClassName: "text-orangeBtnText",
                  }}
                />
              </div>
              <div
                id="description-mobile"
                className="xs:hidden font-roboto-mono text-center"
              >
                Ex-accountant turned full-stack developer
              </div>
              <button
                id="projects-button"
                className="text-orangeBtnText font-bold text-lg p-4 border border-white hover:bg-gray-500 focus:outline-none"
                onClick={() => navigate("/projects")}
              >
                Learn more about me
              </button>
              <div className="flex gap-9" id="external-link">
                <IconButton
                  id="linkedIn-link"
                  link="https://www.linkedin.com/in/christopherqtri/"
                  icon={faLinkedin}
                  size="3x"
                />
                <IconButton
                  id="Github-link"
                  link="https://github.com/MomentaiChris26/"
                  icon={faGithub}
                  size="3x"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default IndexPage;

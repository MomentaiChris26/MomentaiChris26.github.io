import * as React from "react";
import DefaultLayout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import TimeLine from "../components/Profile/Timeline/Timeline";
import TechonologiesList from "../components/Profile/TechnologiesList/TechnologiesList";
import ProfileCard from "../components/Profile/Card";

function MyPicture() {
  return (
    <StaticImage
      src="../images/my-picture-2.png"
      alt="my picture"
      layout="constrained"
      width={220}
      height={220}
      className="rounded-full"
    />
  );
}

const ProfilePage = ({ location }) => {
  return (
    <DefaultLayout path={location.pathname}>
      <div className="bg-aboutPage px-0 sm:px-16 py-6 md:h-full grid grid-col-2 sm:grid-cols-7 gap-6">
        <ProfileCard addClass="col-span-2 flex flex-col">
          <div className="mx-auto my-6">{MyPicture()}</div>
          <div className="flex-grow mx-6">
            <h1 className="text-3xl font-roboto-mono font-extrabold mb-4 text-white">
              About Me
            </h1>
            <div className="mb-6">
              <h3 className="text-lg text-white font-roboto-mono font-bold mb-1">
                Location
              </h3>
              <p className="text-sm text-white font-roboto-mono">
                Melbourne, Australia
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg text-white font-roboto-mono font-bold mb-1">
                Who Am I?
              </h3>
              <p className="text-sm text-white font-roboto-mono text-justify ">
                I am Chris, I am a full stack developer who was once an
                accountant and now decided to perform magic using the power of
                coding.
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg text-white font-roboto-mono font-bold mb-1">
                Contact me
              </h3>
              <ul className="text-sm text-white font-roboto-mono underline">
                <li className="mb-1">
                  <a href="mailto:christophertri90@gmail.com">Email me</a>
                </li>
                <li className="mb-1">
                  <a href="https://github.com/MomentaiChris26">
                    Check out my GitHub
                  </a>
                </li>
                <li className="mb-1">
                  <a href="https://www.linkedin.com/in/christopherqtri/">
                    Connect with me on LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ProfileCard>
        <div className="col-span-2 sm:col-span-5 grid gap-6">
          <ProfileCard addClass="row-span-2 p-4">
            <h1 className="text-lg sm:text-2xl text-center sm:text-left font-roboto-mono font-extrabold mb-4 text-white">
              Work History
            </h1>
            <TimeLine />
          </ProfileCard>
          <ProfileCard addClass="p-4">
            <h1 className="text-lg sm:text-2xl text-center sm:text-left font-roboto-mono font-extrabold mb-4 text-white">
              Technologies I've worked with
            </h1>
            <TechonologiesList />
          </ProfileCard>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProfilePage;

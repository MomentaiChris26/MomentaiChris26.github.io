import * as React from "react";
import DefaultLayout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

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

const ProfilePage = () => {
  return (
    <DefaultLayout>
      <div className="bg-aboutPage px-16 py-6 h-full grid grid-cols-7 gap-6">
        <div className="about-border-rounded-shadow col-span-2 flex flex-col">
          <div className="mx-auto my-6">{MyPicture()}</div>
          <div className="flex-grow mx-4">
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
              <ul className="text-sm text-white font-roboto-mono text-justify ">
                <li>Email: christophertri90@gmail.com</li>
                <li>
                  GitHub: &nbsp;
                  <a href="https://github.com/MomentaiChris26">
                    MomentaiChris26
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/christopherqtri/">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-5 grid grid-row-3 gap-6">
          <div className="about-border-rounded-shadow row-span-2 ">
            Work History
          </div>
          <div className="about-border-rounded-shadow ">
            Technologies I've worked with
          </div>
        </div>

        {/* <div className="h-full grid grid-cols-1 p-4 gap-1">
          <div className="m-auto">
            <h1 className="text-2xl font-roboto-mono font-extrabold mb-4 text-white">
              Info
            </h1>
            {MyPicture()}
            <div className="text-white font-roboto-mono">
              A paragraph introducing myself, where I’ve worked and <br />
              things I’ve done
            </div>
          </div>
          <div className="m-auto bg-gray-500">
            <h1 className="text-xl font-roboto-mono font-extrabold mb-4 text-white">
              Technologies I've worked with
            </h1>
          </div>
        </div> */}
      </div>
    </DefaultLayout>
  );
};

export default ProfilePage;

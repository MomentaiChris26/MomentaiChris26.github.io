import * as React from "react";
import DefaultLayout from "../components/layout";

const ProfilePage = () => {
  return (
    <DefaultLayout>
      <div className="bg-aboutPage flex-grow">
        <div className="h-full grid grid-cols-1 p-8 gap-1">
          <div className="m-auto">
            <h1 className="text-2xl font-roboto-mono font-extrabold text-white">
              Info
            </h1>
            <div>Profile Picture</div>
            <div className="text-white font-roboto-mono">
              A paragraph introducing myself, where I’ve worked and things I’ve
              done
            </div>
          </div>
          <div>Technologies</div>
          <div>Work History</div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProfilePage;

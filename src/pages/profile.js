import * as React from "react";
import DefaultLayout from "../components/layout";

const ProfilePage = () => {
  return (
    <DefaultLayout>
      <div className="bg-aboutPage flex-grow">
        <p>About me</p>
        <p>Work experience</p>
      </div>
    </DefaultLayout>
  );
};

export default ProfilePage;

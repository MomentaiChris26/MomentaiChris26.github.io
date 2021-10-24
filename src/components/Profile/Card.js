import React from "react";

const ProfileCard = ({ addClass, children }) => {
  return (
    <div
      className={`bg-aboutPage mobile-about-card sm:about-shadow ${addClass}`}
    >
      {children}
    </div>
  );
};

export default ProfileCard;

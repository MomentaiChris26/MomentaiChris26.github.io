import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconButton = ({ id, link, icon, size }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" id={id}>
      <FontAwesomeIcon icon={icon} size={size} className="cursor-pointer" />
    </a>
  );
};

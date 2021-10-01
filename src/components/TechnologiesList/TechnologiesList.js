import React, { useState } from "react";
import ListDisplay from "./ListDisplay";
import Links from "../commons/Links";
import technologies from "../../utils/technologies.json";

const TechonologiesList = () => {
  const [selected, setSelect] = useState(technologies[0]);

  const handleChange = (value) => {
    const data = technologies.find(
      (technology) => technology.language === value
    );
    setSelect(data);
  };

  const names = technologies.reduce((acc, current) => {
    acc.push(current.language);
    return acc;
  }, []);

  return (
    <>
      <div className="grid grid-cols-5 divide-x divide-white h-1/2">
        <Links names={names} selected={selected} handleChange={handleChange} />

        <div className="pl-5 col-start-2 col-end-5">
          <ListDisplay {...selected} />
        </div>
      </div>
    </>
  );
};

export default TechonologiesList;

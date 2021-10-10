import React, { useState } from "react";
import ListDisplay from "./ListDisplay";
import Links from "../../commons/Links";
import technologies from "../../../utils/technologies.json";

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
      <div className="grid sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-white h-1/2">
        <div className="col-span-1 sm:col-end-2">
          <Links
            names={names}
            selected={selected}
            handleChange={handleChange}
          />
        </div>

        <div className="pt-5 pl-1 sm:pl-5 col-span-1 sm:col-start-2 sm:col-end-5">
          <ListDisplay {...selected} />
        </div>
      </div>
    </>
  );
};

export default TechonologiesList;

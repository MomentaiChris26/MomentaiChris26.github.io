import React, { useState } from "react";
import Links from "./Links";
import WorkHistoryDisplay from "./WorkHistoryDisplay";
import companies from "../../utils/work-history";

const TimeLine = () => {
  const [selected, setSelect] = useState(companies[0]);

  const handleChange = (value) => {
    const data = companies.find((company) => company.name === value);
    setSelect(data);
  };

  const names = companies.reduce((acc, current) => {
    acc.push(current.name);
    return acc;
  }, []);

  return (
    <>
      <div className="grid grid-cols-5 divide-x divide-white h-3/4">
        <Links names={names} selected={selected} handleChange={handleChange} />

        <div className="pl-5 col-start-2 col-end-6">
          <WorkHistoryDisplay {...selected} />
        </div>
      </div>
    </>
  );
};

export default TimeLine;

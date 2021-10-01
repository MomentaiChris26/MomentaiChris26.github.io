import React from "react";

const WorkHistoryDisplay = ({
  achievements,
  end_date,
  name,
  role,
  start_date,
}) => {
  return (
    <div>
      <p className="text-white font-roboto-mono lg:text-lg text-md">
        {role}&nbsp;<span className="text-orangeBtnText">@</span>&nbsp;{name}
      </p>
      <p className="text-gray-300 font-roboto-mono text-sm">
        {start_date}&nbsp;-&nbsp;{end_date}
      </p>
      <ul className="list-disc list-inside my-2">
        {achievements.map((achievement) => {
          return (
            <li key={achievement} className="text-orangeBtnText">
              <span className="text-white font-roboto-mono lg:text-sm text-xs">
                {achievement}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkHistoryDisplay;

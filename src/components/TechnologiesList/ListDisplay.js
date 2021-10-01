import React from "react";

const ListDisplay = ({ frameworks }) => {
  return (
    <div>
      <ul className="list-disc list-inside my-2" style={{ columns: 2 }}>
        {frameworks.map((framework) => {
          return (
            <li key={framework} className="text-orangeBtnText">
              <span className="text-white font-roboto-mono text-sm">
                {framework}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListDisplay;

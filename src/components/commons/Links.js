import React from "react";

const Links = ({ names, handleChange, selected }) => {
  return (
    <ul className="text-white font-roboto-mono lg:text-lg md:text-md text-sm lg:pr-5 pr-8">
      {names.map((name) => {
        return (
          <li className="mb-1 text-right " key={name}>
            <button
              className={`mb-1 text-right cursor-pointer hover:text-red-200 ${
                selected.name === name && "font-black"
              }`}
              onClick={() => handleChange(name)}
            >
              {name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;

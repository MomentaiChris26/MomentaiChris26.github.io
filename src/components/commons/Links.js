import React from "react";

const Links = ({ names, handleChange, selected }) => {
  return (
    <ul className="text-white font-roboto-mono flex justify-around  sm:flex-col overflow-x-scroll lg:text-md text-sm md:pr-5 w-full">
      {names.map((name) => {
        return (
          <li className="mb-1 mx-1 text-right" key={name}>
            <button
              className={`mb-1 text-center sm:text-right cursor-pointer hover:text-red-200 ${
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

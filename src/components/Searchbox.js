import React from "react";
import search from "../Assets/search-sm.svg";

export const Searchbox = () => {
    return (
      <div className="justify-end  my-8 flex">
    <div className="flex justify-between items-center">
      <div className="flex items-center bg-[#fff] rounded-lg px-4 py-2 border-[#E6E7EC] border border-solid outline-none">
        <input
          type="text"
          placeholder="Search transformation"
          className="outline-none bg-transparent"
        />
        <img src={search} alt="search" className="ml-2" />
      </div>
            </div>
        </div>
  );
};

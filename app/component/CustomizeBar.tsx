"use client";
import { faChevronDown, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Badge from "./Badge";
import FilterSideBar from "./FilterSideBar";

const CustomizeBar = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  return (
    <>
      <div className="container mx-auto mt-[50px]">
        <div className="gi-pro-list-top flex items-center justify-between text-[14px] border-[1px] border-solid border-[#eee] rounded-[5px] mb-[30px] ">
          <div className="min-[768px]:w-[50%] w-full gi-grid-list">
            <div className="gi-gl-btn ml-[5px] flex items-center flex-row">
              <button
                onClick={() => setIsFilterOpen(true)}
                type="button"
                className="grid-btn filter-toggle-icon h-[40px] w-[40px] border-[0] rounded flex items-center justify-center flex-row bg-[#5caf90] group"
              >
                <FontAwesomeIcon
                  className="h-[15px] text-black text-white"
                  icon={faFilter}
                />
              </button>

              <button
                type="button"
                className="grid-btn btn-list-50 h-[40px] w-[40px] border-[0] rounded-[0] flex items-center justify-center flex-row"
              >
                <i className="fi fi-rr-list text-[20px] text-[#4b5966] leading-[0]"></i>
              </button>
            </div>
          </div>
          <div className="min-[768px]:w-[50%] w-full gi-sort-select flex justify-end items-center ">
            <div className="gi-select-inner relative flex w-[140px] h-[50px] leading-[1.5] bg-[#fff] overflow-hidden rounded-[0] border-l-[1px] border-solid border-[#eee]">
              <select
                name="gi-select"
                id="gi-select"
                className="appearance-none outline-[0] border-[0] bg-[#fff] grow-[1] px-[10px] text-[#777] cursor-pointer"
                defaultValue="1"
              >
                <option value="1">Position</option>
                <option value="2">Relevance</option>
                <option value="3">Name, A to Z</option>
                <option value="4">Name, Z to A</option>
                <option value="5">Price, low to high</option>
                <option value="6">Price, high to low</option>
              </select>
              <FontAwesomeIcon
                className="absolute right-5 top-4 text-gray-400"
                icon={faChevronDown}
              />
            </div>
          </div>
        </div>

        <div className="gi-select-bar mt-[-5px] mx-[-5px] mb-[25px] flex flex-wrap justify-end ">
          <Badge />
          <Badge />
          <Badge />
          <Badge />
        </div>
      </div>
      <FilterSideBar
        isFilterOpen={isFilterOpen}
        setIsFilterOpen={setIsFilterOpen}
      />
    </>
  );
};

export default CustomizeBar;

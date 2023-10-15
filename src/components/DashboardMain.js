import React from 'react';
import { Searchbox } from './Searchbox';
import { Details } from './Details';


  
  
export const DashboardMain = () => {
  return (
    <div className="flex flex-col w-full">
      <div className=" flex items-center gap-3 w-full justify-end my-2  pr-6 py-1 border-b-2 border-solid border-[#E7E7E7]">
        <p className="text-[#FFF] bg-[#32D583] rounded-md text-lg font-extrabold py-1 px-2.5 ">
          S
        </p>
        <div className="flex flex-col">
          <p className="text-[#101828] text-base font-normal">SigFlow</p>
          <p className="text-[#828282] text-base font-normal">
            Adeoluwa Siyanbade
          </p>
        </div>
      </div>
      {/* vjvj */}
      <main className="py-4 px-8">
        <div className="flex items-center justify-between">
          <p className="text-[#101828] text-xl font-normal">Transformation</p>
          <div className="flex items-center gap-6">
            <button className="flex text-[#fff]  bg-[#32D583] rounded-md px-4 py-1.5">
              Create a new transformation
            </button>
            <button className="flex text-[#fff] bg-[#32D583] rounded-md px-4 py-1.5">
              Filters
            </button>
          </div>
        </div>
        <Searchbox />
        <Details />
      </main>
    </div>
  );
}

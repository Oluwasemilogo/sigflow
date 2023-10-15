import React from "react";
import dots from '../Assets/dots.svg'

export const Details = () => {
  return (
    <div className="border p-3 rounded-md border-solid border-[#E6E7EC] h-[65vh]">
      <div className="flex justify-between px-4 items-center">
        <p className="text-[#828282] text-lg font-normal"> Name</p>
        <p className="text-[#828282] text-lg font-normal">Creation Date</p>
        <p className="text-[#828282] text-lg font-normal">Status</p>
        <p></p>
      </div>
      <div className="flex justify-between px-4 items-center my-2 border-b border-solid border-[#E6E7EC] py-1">
        <p className="text-[#34373F] text-base font-normal">Gotham Asylum</p>
        <p className="text-[#34373F] text-base font-normal">10th Aug, 2023</p>
        <p className="text-[#32D583] bg-[#ECFDF3] px-3 py-1 text-base font-normal rounded-md">
          Paused
        </p>
        <img src={dots} alt="dots" />
      </div>
      <div className="flex justify-between px-4 items-center my-2 border-b border-solid border-[#E6E7EC] py-1">
        <p className="text-[#34373F] text-base font-normal">Gotham Asylum</p>
        <p className="text-[#34373F] text-base font-normal">10th Aug, 2023</p>
        <p className="text-[#fff] bg-[#E0E0E0] px-3 py-1 text-base font-normal rounded-md">
          Archived
        </p>
        <img src={dots} alt="dots" />
      </div>
      <div className="flex justify-between px-4 items-center my-2 border-b border-solid border-[#E6E7EC] py-1">
        <p className="text-[#34373F] text-base font-normal">Gotham Asylum</p>
        <p className="text-[#34373F] text-base font-normal">10th Aug, 2023</p>
        <p className="text-[#32D583] bg-[#ECFDF3] px-3 py-1  rounded-md text-base font-normal">
          Paused
        </p>
        <img src={dots} alt="dots" />
      </div>
      <div className="flex justify-between px-4 items-center my-2 border-b border-solid border-[#E6E7EC] py-1">
        <p className="text-[#34373F] text-base font-normal">Gotham Asylum</p>
        <p className="text-[#34373F] text-base font-normal">10th Aug, 2023</p>
        <p className="text-[#fff] bg-[#E0E0E0] px-3 py-1 text-base font-normal rounded-md">
          Archived
        </p>
        <img src={dots} alt="dots" />
      </div>

      <div className="flex items-center gap-2 my-52 ">
        <p className="bg-[#32D583] text-white py-2 px-3 text-sm font-normal rounded-md cursor-pointer">
          5
        </p>
        <p className="bg-[#F5F5F5] text-[#828282]  text-sm font-normal py-2 px-3 rounded-md cursor-pointer">
          10
        </p>
        <p className="bg-[#F5F5F5] text-[#828282]  text-sm font-normal py-2  px-3 rounded-md cursor-pointer">
          15
        </p>
      </div>
    </div>
  );
};

import React from 'react'
import chevron from '../Assets/chevron-selector-vertical.svg';
import events from '../Assets/events.svg';
import pipeline from '../Assets/pipeline.svg';
import source from '../Assets/source.svg';
import destination from '../Assets/destination.svg';
import transform from '../Assets/transform.svg';
import profile from '../Assets/profile.svg';
import settings from '../Assets/settings-01.svg';
import book from '../Assets/book.svg'


export const SideBar = () => {
  return (
    <div className="flex flex-col gap-6  overflow-hidden  bg-sidebar-background pt-4 px-10">
      <h1 className="text-[#32D583] text-2xl font-semibold">SigFlow</h1>
      <div className="flex  w-[12rem] gap-24 bg-chev-background rounded-md py-1 px-3 cursor-pointer">
        
        <p className="text-[#101828] font-normal text-lg">Sigflow</p>
       <img src={chevron} alt="dropdown" />
      </div>
      <ul className="flex flex-col gap-1">
        <li className="flex gap-[0.4rem] w-full px-3 items-center  py-1 cursor-pointer">
          <img src={events} alt="dropdown" />
          <p className="text-center text-lg text-[#828282] font-normal">
            Events
          </p>
        </li>
        <li className="flex gap-[0.4rem] w-full px-3 items-center  py-1 cursor-pointer">
          <img src={pipeline} alt="dropdown" />
          <p className="text-center text-lg text-[#828282] font-normal">
            Pipeline
          </p>
        </li>
        <li className="flex gap-[0.4rem] w-full px-3 items-center  py-1 cursor-pointer">
          <img src={source} alt="dropdown" />
          <p className="text-center text-lg text-[#828282] font-normal">
            Source
          </p>
        </li>
        <li className="flex gap-[0.4rem] w-full px-3 items-center  py-1 cursor-pointer">
          <img src={destination} alt="dropdown" />
          <p className="text-center text-lg text-[#828282] font-normal">
            Destination
          </p>
        </li>
        <li className="flex gap-[0.8rem] w-[12rem] px-3 items-center rounded-md cursor-pointer bg-[#ECFDF3] py-3 my-2 mt-6 ">
          <img src={transform} alt="dropdown" />
          <p className="text-center text-lg text-[#32D583] font-normal">
            Transformation
          </p>
        </li>
        <li className="flex gap-[0.4rem] w-full px-3 items-center  py-2 cursor-pointer mt-8  border-t-2 border-solid border-[#E7E7E7]">
          <img src={profile} alt="dropdown" />
          <p className="text-center text-lg text-[#828282] font-normal">
            Account
          </p>
        </li>
        <li className="flex gap-[0.4rem] w-full px-3 items-center  py-1 cursor-pointer">
          <img src={settings} alt="dropdown" />
          <p className="text-center text-lg text-[#828282] font-normal">
            Settings
          </p>
        </li>
        <li className="flex gap-[0.4rem] w-full px-3 items-center  py-1 mt-24 cursor-pointer">
          <img src={book} alt="dropdown" />
          <p className="text-center text-lg text-[#32D583] font-normal">Help</p>
        </li>
        <li className="flex gap-[0.4rem] w-full px-3 items-center  py-1 cursor-pointer">
          <img src={book} alt="dropdown" />
          <p className="text-center text-lg text-[#32D583] font-normal">
            Documentation
          </p>
        </li>
      </ul>
    </div>
  );
}

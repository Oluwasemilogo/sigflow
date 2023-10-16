import React,{useState} from "react";
import dots from '../Assets/dots.svg';
import eye from '../Assets/eye.svg';
import trash from '../Assets/trash.svg';
import archive from '../Assets/archive.svg';


export const Details = () => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const showOverlay = () => {
      setOverlayVisible(true);
    };
    const hideOverlay = (e) => {
      if (isOverlayVisible && e.target.classList.contains("overlay-backdrop")) {
        setOverlayVisible(false);
      }
    };

  return (
    <div className="border p-3 rounded-md border-solid border-[#E6E7EC] h-[65vh]">
      <div className="flex justify-between px-4 items-center">
        <p className="text-[#828282] text-lg font-normal"> Name</p>
        <p className="text-[#828282] text-lg font-normal">Creation Date</p>
        <p className="text-[#828282] text-lg font-normal">Status</p>
        <p></p>
      </div>
      <div className="flex justify-between px-4 items-center my-2 border-b border-solid border-[#E6E7EC] py-1 relative">
        <p className="text-[#34373F] text-base font-normal">Gotham Asylum</p>
        <p className="text-[#34373F] text-base font-normal">10th Aug, 2023</p>
        <p className="text-[#32D583] bg-[#ECFDF3] px-3 py-1 text-base font-normal rounded-md">
          Paused
        </p>
        <img
          src={dots}
          alt="dots"
          onClick={showOverlay}
          className="cursor-pointer"
        />
        {isOverlayVisible && (
          <div
            className="absolute inset-0  w-[16.2rem] h-[8rem] flex top-[200px] left-[1000px]    bg-opacity-80 overlay-backdrop cursor-pointer"
            onClick={hideOverlay}
          >
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="cursor-pointer flex items-center gap-3">
                <img src={eye} alt="eye" className="cursor-pointer w-6 h-6" />
                <p className="text-[#34373F] text-base font-normal">
                  View Transformation
                </p>
              </div>
              <div className="cursor-pointer flex items-center gap-3 my-2">
                <img src={archive} alt="eye" className="cursor-pointer w-6 h-6" />
                <p className="text-[#34373F] text-base font-normal">
                  Archive Transformation
                </p>
              </div>
              <div className="cursor-pointer flex items-center gap-3 my-2">
                <img src={trash} alt="eye" className="cursor-pointer w-6 h-6" />
                <p className="text-[#AF202D] text-base font-normal">Delete</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-between px-4 items-center my-2 border-b border-solid border-[#E6E7EC] py-1">
        <p className="text-[#34373F] text-base font-normal">Gotham Asylum</p>
        <p className="text-[#34373F] text-base font-normal">10th Aug, 2023</p>
        <p className="text-[#fff] bg-[#E0E0E0] px-3 py-1 text-base font-normal rounded-md">
          Archived
        </p>
        <img
          src={dots}
          alt="dots"
          onClick={showOverlay}
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-between px-4 items-center my-2 border-b border-solid border-[#E6E7EC] py-1">
        <p className="text-[#34373F] text-base font-normal">Gotham Asylum</p>
        <p className="text-[#34373F] text-base font-normal">10th Aug, 2023</p>
        <p className="text-[#32D583] bg-[#ECFDF3] px-3 py-1  rounded-md text-base font-normal">
          Paused
        </p>
        <img
          src={dots}
          alt="dots"
          onClick={showOverlay}
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-between px-4 items-center my-2 border-b border-solid border-[#E6E7EC] py-1">
        <p className="text-[#34373F] text-base font-normal">Gotham Asylum</p>
        <p className="text-[#34373F] text-base font-normal">10th Aug, 2023</p>
        <p className="text-[#fff] bg-[#E0E0E0] px-3 py-1 text-base font-normal rounded-md">
          Archived
        </p>
        <img
          src={dots}
          alt="dots"
          onClick={showOverlay}
          className="cursor-pointer"
        />
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

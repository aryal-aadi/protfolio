import React from "react";
import { useState } from "react";
import Photo from "./imgs/about.jpg.webp";

function Snav() {
  const [hoverData, setHoverData] = useState(false);
  const navData = [
    {
      title: "Home",
      pathname: "/",
    },
    {
      title: "About",
      pathname: "/",
    },
    {
      title: "Services",
      pathname: "/",
    },
    {
      title: "Skills",
      pathname: "/",
    },
    {
      title: "Education",
      pathname: "/",
    },
    {
      title: "Experience",
      pathname: "/",
    },
    {
      title: "Work",
      pathname: "/",
    },
    {
      title: "Blog",
      pathname: "/",
    },
    {
      title: "Contacts",
      pathname: "/",
    },
  ];
  return (
    <div>
      <div className="fixed w-fit h-screen bg-slate-200 flex flex-col items-center justify-center px-28 py-4 text-black">
        <img src={Photo} className="rounded-full h-28 w-28" alt="nothing" />
        <div className="py-4 flex flex-col items-center justify-center">
          <p className="font-bold text-xl cursor-pointer">Aaditya Aryal</p>
          <p>
            <span className="cursor-pointer font-medium text-blue-400 text-xs hover:underline transition-all duration-700 ">
              UI/UX/DESIGNER
            </span>
            <span className="text-xs font-light"> IN NEPAL</span>
          </p>
        </div>
        {navData.map((val, i) => {
          return (
            <div
              className="py-2 flex flex-col justify-center items-center"
              key={i}
              onMouseLeave={() => setHoverData(false)}
              onMouseEnter={() => {
                setHoverData(true);
                setHoverData(val.title);
              }}
            >
              <div className="text-sm text-gray-600 hover:text-blue-400 transition-all duration-700  cursor-pointer">
                {val.title}
                <div
                  className={`w-full h-[1.5px] bg-blue-500 transition-all duration-300 ${
                    hoverData === "true" || hoverData === val.title
                      ? "scale-100"
                      : "scale-0"
                  }`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Snav;

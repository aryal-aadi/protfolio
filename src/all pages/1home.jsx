import React from "react";
import bgpic from "../imgs/img_bg_2.jpg.webp";
import { AiOutlineDownload } from "react-icons/ai";

function Home() {
  return (
    <div>
      <div
        className=" bg-center w-screen h-screen flex justify-start items-start "
        style={{
          // position: "fixed",
          top: "0vh",
          contain: "",
          content: "",
          height: "100vh",
          backgroundImage: `url(${bgpic})`,
          backgroundSize: "72% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" py-14 bg-green-400">
          <div className="font-bold text-2xl flex flex-col justify-start items-start  ">
            <span>hi!!</span>
            <br />
            <span>Its me Aaditya Aryal</span>
          </div>
          <button className="w--32 h-9 rounded-lg text-xs px-5 gap-2 flex justify-center items-center bg-gray-600 text-white hover:shadow-lg hover:bg-white hover:text-gray-600 transition-all duration-300">
            DOWNLOAD CV
            <AiOutlineDownload className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

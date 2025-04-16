import React from "react";
import mobileIcon from "../assets/mobileIcon.svg"
import emailIcon from "../assets/emailIcon.svg"
import dataAccuracyIcon from "../assets/dataAccuracyIcon.svg"
import SubCard from "./SubCard";
import backgroundRed from "../assets/backgroundRed.svg"
import appleLogo from "../assets/appleLogo.svg"
import personLogo from "../assets/personLogo.svg"

export default function Card() {
  return (
      <div className="w-[1193px] bg-black p-8 rounded-xl shadow-lg"
      style={{ backgroundImage: `url(${backgroundRed})` }}
      
      
      >
        <div className="text-center mb-8">
         
        <div className="self-stretch text-center justify-start text-white text-4xl font-normal font-['PP_Neue_Montreal'] leading-[60px]">“27% Increase in positive reply”</div>
          
        <div className="self-stretch text-center justify-start text-white text-xl font-normal font-['Core_Sans_D_35_Regular'] leading-snug">“The depth and breadth of Prospeo’s database has enabled us to prospect better accounts and bring in larger deals. In fact, since bringing on Prospeo the average company size we’re closing has grown by 2.5x.”</div>
        </div>


  <div className="w-full flex flex-col items-center text-center my-[23px]">

  <div className="w-10 relative rounded-full overflow-hidden">
    <img
      className="w-[713.14px] h-44 absolute -left-[581.09px] -top-[89.14px]"
      src={personLogo}
      alt="User avatar"
    />
  </div>


  <div className="flex items-center gap-2">
    <div className="text-white text-lg font-normal leading-tight">
    
      Michel Lieben, CEO at
    </div>

    <div className="h-10 px-3 py-1 rounded-xl outline outline-1 outline-zinc-300 flex items-center gap-2">
      <div className="w-5 h-6 relative">
        <img
          className="w-5 h-6 absolute top-0 left-0"
          src={appleLogo}
          alt="Apple logo"
        />
      </div>
      <div className="text-white text-lg font-normal leading-tight">
        ColdIQ
      </div>
    </div>
  </div>
</div>
        {/* Sub Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[23px] w-[1116px] h-[205px];">
        
        <SubCard topText="55%" midText="Pick up rate on mobiles" svgImg={mobileIcon}></SubCard>
        <SubCard topText="55M" midText="Verified Email Addresses" svgImg={emailIcon}></SubCard>
        <SubCard topText="98%" midText="Data Accuracy" svgImg={dataAccuracyIcon}></SubCard>



        </div>
      </div>
  );
}
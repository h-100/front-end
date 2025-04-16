import React from 'react'
import googleRating from "../assets/googleRating.svg"
import rating2 from "../assets/rating2.svg"
import buttonStars from "../assets/buttonStars.svg"

function TopContentText() {
  return (
    <>
    <div className="flex justify-center mt-[60px]">
        <div className="self-stretch h-14 mtext-center justify-center text-red-950 text-6xl font-medium font-['PP_Neue_Montreal'] leading-[60px]">Find leads that respond</div>
    </div>

    <div className="flex justify-center">
        <div className="mt-[16px] w-[590px] text-center justify-start text-black text-lg font-normal font-['Core_Sans_D_35_Regular'] leading-tight mt-[16px]">Accelerate growth with verified emails and mobile numbers  - 250M leads and 30M companies at your fingertips.</div>
    </div>

    <div className="mt-[24px] flex justify-center">
        <div className="flex items-center gap-4">
        <img src={googleRating} alt="Google Rating" />
        |
        <img src={rating2} alt="Rating 2" />
        </div>
    </div>

    <div className="flex justify-center ">
    <div className="px-3 py-2.5 bg-red-600 rounded-lg shadow-[0px_2.1578104496002197px_10.357489585876465px_0px_rgba(255,62,62,0.30)] outline outline-1 outline-offset-[-1.08px] outline-white inline-flex justify-center items-center gap-2 overflow-hidden mt-[24px] mb-[60px]">
    <img src={buttonStars} alt="Stars Icon" className="w-5 h-5" />
    <span className="text-white text-lg font-normal font-['Core_Sans_D_35_Regular'] leading-tight">
        Get Started for free
        </span>
    </div>
    </div>
    </>
  )
}

export default TopContentText
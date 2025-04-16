import React from "react"
import arrowIcon from "../assets/arrowIcon.svg"

export default function StoryCard({ icon }) {
  return (
    <div className="w-[388px] h-[202.82px] p-[21px] pr-[29px] pl-[29px] rounded-[18.6px] bg-white shadow-md flex flex-col justify-between">
      <div className="text-base text-gray-800 font-medium leading-snug">
        Oracle leverages Prospeo to uncover high-quality contact data, leading
        to great opportunities in AI
      </div>

      <div className="mt-[21px] flex justify-between items-center">
        <a
          href="#"
          className="text-[#EF1515] font-semibold hover:underline flex items-center gap-1"
        >
          Read the Story →
        </a>
        <img src={arrowIcon} alt="icon" className="w-6 h-6" />
      </div>

      <div className="mt-[10px] flex items-center justify-start">
        <img src={icon} alt="company icon" className="w-[171px] h-[38.82px]" />
      </div>
    </div>
  )
}

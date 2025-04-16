import React from "react"

function SubCard({ topText, midText, svgImg }) {
  return (
    <>
      <div className="self-stretch self-stretch relative rounded-3xl shadow-[inset_0px_-13.399112701416016px_54.93635940551758px_0px_rgba(255,227,80,0.15)] outline outline-[1.34px] outline-offset-[-1.34px] outline-white/5 backdrop-blur-[5.45px] inline-flex flex-col justify-start items-center gap-3.5 overflow-hidden">
        <div className="self-stretch flex flex-col justify-center items-center">
          <div className="justify-start text-white text-5xl font-normal font-['Core_Sans_D_35_Regular']">
            {topText}
          </div>
          <div className="text-center justify-start text-white text-2xl font-normal font-['PP_Neue_Montreal'] leading-10">
            {midText}
          </div>
        </div>
        <div className="">
          <img style={{ width: 151.77, height: 115.33 }} src={svgImg} />
        </div>
      </div>
    </>
  )
}

export default SubCard

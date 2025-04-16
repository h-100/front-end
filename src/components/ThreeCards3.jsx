import React from "react"
import card1aBg from "assets/card1aBg.svg"
import card2aBg from "assets/card2aBg.svg"
import card3aBg from "assets/card3aBg.svg"

export default function ThreeCards3() {
  return (
    <div className="mx-auto p-4 flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="justify-start text-black text-3xl font-normal font-['Neue_Montreal']">
          Collaborate with our team
          <div
            className="h-[369px] w-[413px] rounded-[25px] bg-cover bg-center p-[30px] gap-[18.35px] "
            style={{ backgroundImage: `url(${card1aBg})` }}
          ></div>
        </div>

        <div className="justify-start text-black text-3xl font-normal font-['Neue_Montreal']">
          Download our chrome extension
          <div
            className="rounded-[18px] bg-cover bg-center h-[369px] w-[750px] gap-[55px]"
            style={{ backgroundImage: `url(${card2aBg})` }}
          ></div>
        </div>
      </div>

      <div
        className="h-[200px] rounded-[18px] p-[40px] bg-cover bg-center h-[205px] w-[1196px]"
        style={{ backgroundImage: `url(${card3aBg})` }}
      ></div>
    </div>
  )
}

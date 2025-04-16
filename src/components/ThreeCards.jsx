import React from "react"
import card1Bg from "assets/card1Bg.svg"
import card2Bg from "assets/card2Bg.svg"
import card3Bg from "assets/card3Bg.svg"

export default function ThreeCards() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div
          className="h-[467.13px] w-[365px] rounded-[25px] bg-cover bg-center p-[30px] gap-[49px] "
          style={{ backgroundImage: `url(${card1Bg})` }}
        ></div>

        <div
          className="rounded-[25px] bg-cover bg-center h-[467.13px] w-[798px]"
          style={{ backgroundImage: `url(${card2Bg})` }}
        ></div>
      </div>

      <div
        className="h-[200px] rounded-[25px] p-[40px] bg-cover bg-center h-[245.433px] w-[1196px]"
        style={{ backgroundImage: `url(${card3Bg})` }}
      ></div>
    </div>
  )
}

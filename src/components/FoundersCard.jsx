import React from "react"
import foundersCard from "../assets/foundersCard.svg"

function FoundersCard() {
  return (
    <div
      className="h-[200px] rounded-[18px] p-[40px] bg-cover bg-center h-[498.53px] w-[1196px] gap-[3.18px]"
      style={{ backgroundImage: `url(${foundersCard})` }}
    ></div>
  )
}

export default FoundersCard

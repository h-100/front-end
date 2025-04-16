import React from "react"
import Card2 from "./Card2"
import oracleIconLg from "assets/oracleIconLg.svg"
import webFlowIconLg from "assets/webFlowIconLg.svg"
import oracleIcongreyLg from "assets/oracleIcongreyLg.svg"

export default function ThreeCardsRow() {
  return (
    <div className="flex gap-[21px] justify-center px-4">
      <Card2 icon={oracleIconLg} />
      <Card2 icon={webFlowIconLg} />
      <Card2 icon={oracleIcongreyLg} />
    </div>
  )
}

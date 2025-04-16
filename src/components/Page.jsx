import React from "react"
import backgroundImage from "assets/background.svg"
import Navbar from "./Navbar"
import TopContentText from "./TopContentText"
import table from "assets/table.svg"
import companyIconsList from "assets/companyIconsList.svg"
import Card from "./Card"
import ThreeCards from "./ThreeCards"
import FoundersCard from "./FoundersCard"
import ThreeCardsRow from "./ThreeCardsRow"
import ThreeCards3 from "./ThreeCards3"
import Footer from "./Footer"
import lowerBgImage from "assets/lowerBgImage.svg"

export default function Page() {
  return (
    <>
      <div className="w-full min-h-screen">
        <div className="flex max-w-[1381px] mx-auto px-6 py-12">
          <div
            className="w-full h-[789px] rounded-[20px] m-[29.5px] bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <Navbar></Navbar>
            <TopContentText></TopContentText>
            <div className="flex justify-center mx-[123.6px]">
              <div className="w-[1265.43px] h-[676.30px]">
                <img src={table} className="rounded-xl shadow-lg" />
              </div>
            </div>

            <div className="pt-[100px] pb-[100px] flex justify-center">
              <img src={companyIconsList} />
            </div>

            <div className="w-[1193px] flex justify-center">
              <Card></Card>
            </div>

            <div className="flex justify-center py-[80px]">
              <div className="justify-start text-red-950 text-5xl font-medium font-['PP_Neue_Montreal'] leading-[50px] text-center">
                Integrate into any workflow
              </div>
            </div>

            <div className="flex justify-center">
              <ThreeCards></ThreeCards>
            </div>

            <div className="justify-start text-red-950 text-5xl font-medium font-['PP_Neue_Montreal'] leading-[50px] text-center py-[80px]">
              Cases Study
            </div>

            <div className="flex justify-center">
              <FoundersCard></FoundersCard>
            </div>

            <div style={{ backgroundImage: `url(${lowerBgImage})` }}>
              <div className="flex justify-center">
                <div className="self-stretch inline-flex flex-col justify-start items-start gap-16 py-[60px]">
                  <div className="w-[794px] pl-4 justify-center">
                    <span class="text-red-950 text-5xl font-medium font-['PP_Neue_Montreal'] leading-[50px]">
                      Meet the companies generating more revenues with{" "}
                    </span>
                    <span class="text-red-600 text-5xl font-medium font-['PP_Neue_Montreal'] leading-[50px]">
                      Prospeo
                    </span>
                  </div>
                  <ThreeCardsRow></ThreeCardsRow>
                </div>
              </div>
              <div className="flex justify-center">
                <ThreeCards3></ThreeCards3>
              </div>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  )
}

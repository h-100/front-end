import React from "react"
import companyLogo from "../assets/companyLogo.svg"
import linkedinIcon from "../assets/linkedinIcon.svg"
import youtubeIcon from "../assets/youtubeIcon.svg"
import instaIcon from "../assets/instaIcon.svg"
import twitterIcon from "../assets/twitterIcon.svg"
import facebookIcon from "../assets/facebookIcon.svg"
import footerBg from "../assets/footerBgImage.svg"

export default function Footer() {
  return (
    <footer
      className="w-[1440px] h-[446px] gap-[60px] p-[120px] text-black"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="max-w-[1200px] mx-auto flex gap-12">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 pt-10">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="w-10 h-10 -ml-[16px]"
            />
            <span className="text-orange-950 text-3xl mt-[16px] font-['Core_Sans_D_35_Regular']">
              Prospeo
            </span>
          </div>
          <p className="text-sm text-black mb-[16px] mt-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </p>
          <div className="flex gap-4">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-5 h-5 cursor-pointer"
            />
            <img
              src={youtubeIcon}
              alt="LinkedIn"
              className="w-5 h-5 cursor-pointer"
            />
            <img
              src={instaIcon}
              alt="LinkedIn"
              className="w-5 h-5 cursor-pointer"
            />
            <img
              src={twitterIcon}
              alt="LinkedIn"
              className="w-5 h-5 cursor-pointer"
            />
            <img
              src={facebookIcon}
              alt="LinkedIn"
              className="w-5 h-5 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-1 justify-between">
          <div className="flex flex-col">
            <h4 className="font-semibold text-black mb-4">Products</h4>
            <ul className="space-y-2 text-black">
              <li>
                <a href="#" className="hover:underline">
                  Domain Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Email finder
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mobile finder
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Email verifier
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Export sales navigator
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-black mb-4">Resources</h4>
            <ul className="space-y-2 text-black">
              <li>
                <a href="#" className="hover:underline">
                  Domain Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Email finder
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mobile finder
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Email verifier
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Export sales navigator
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold text-black mb-4">Other</h4>
            <ul className="space-y-2 text-black">
              <li>
                <a href="#" className="hover:text-white no-underline">
                  Domain Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Email finder
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Mobile finder
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Email verifier
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Export sales navigator
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

import React from "react";
import googleIcon from "../assets/googleIcon.svg"; // Replace with your actual SVG file paths
import docuSign from "../assets/docuSign.svg";
import flixierIcon from "../assets/flixierIcon.svg";
import oracleIcon from "../assets/oracleIcon.svg";
import webFlowIcon from "../assets/webFlowIcon.svg";

export default function IconRow() {
  return (
    <div className="flex justify-center space-x-4">
      <div>
        <img src={googleIcon} className="w-8 h-8" /> {/* You can adjust the size using Tailwind classes */}
      </div>
      <div className="icon">
        <img src={docuSign} className="w-8 h-8" />
      </div>
      <div className="icon">
        <img src={flixierIcon} className="w-8 h-8" />
      </div>
      <div className="icon">
        <img src={oracleIcon} className="w-8 h-8" />
      </div>
      <div className="icon">
        <img src={webFlowIcon} className="w-8 h-8" />
      </div>
    </div>
  );
}
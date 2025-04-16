import React from 'react'
import companyIcon from '../assets/companyIcon.svg';

function Navbar() {
  return (
    <div className="flex justify-center">
    <nav className="flex items-center justify-between w-[1121px] h-[65px] rounded-[7px] bg-white p-[20px] shadow-[0px_0.78px_3.11px_0px_rgba(0,0,0,0.05)] shadow-[0px_6.99px_15.85px_0px_rgba(0,0,0,0.05)] mt-[22px]
    ">
      {/* Left Elements */}
      <div className="flex items-center space-x-[10px] rounded-[7px]">
          <img src={companyIcon} alt="icon" className="w-8 h-8" />
          <span className="text-xl font-bold text-[#EF1515]"
          >Prospeo</span>
        </div>

      {/* Middle Elements */}
      <div className="hidden md:flex space-x-[32px] text-black font-coresans">
          <a href="#" className="hover:underline"
          style={{
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '20px',
            letterSpacing: '0px',
          }}
          
          >
            Platform
          </a>
          <a href="#" className="hover:underline"
          style={{
            fontFamily: 'Core Sans D, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '20px',
            letterSpacing: '0px',
          }}>
            Our data
          </a>
          <a href="#" className="hover:underline"
          style={{
            fontFamily: 'Core Sans D, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '20px',
            letterSpacing: '0px',
          }}
          >
            Why Prospeo
          </a>
          <a href="#" className="hover:underline"
          style={{
            fontFamily: 'Core Sans D, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '20px',
            letterSpacing: '0px',
          }}
          >
            Resources
          </a>
          <a href="#" className="hover:underline"
          style={{
            fontFamily: 'Core Sans D, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '20px',
            letterSpacing: '0px',
          }}
          >
            Pricing
          </a>
        </div>
      {/* Right Elements */}
      <div className="flex space-x-[16px] pt-[5px]">
          <a
            href="#"
            className="text-[#0B0C0E] hover:text-gray-600 justify-center items-center pt-2"
            style={{
              fontFamily: 'Core Sans D, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '20px',
              letterSpacing: '0px',
            }}
          >
            Login
          </a>

          <button
            className="p border-[#EF1515] border-[0.98px] rounded-[7.84px] flex justify-center items-center"
            style={{
              width: '120px',
              height: '38px',
              gap: '4.9px',
              backgroundColor: '#EF1515', 
              color: '#ffffff', 
              fontFamily: 'Core Sans D, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '20px',
              letterSpacing: '0px',
            }}
          >
            Get Started
          </button>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative min-h-screen lg:col-span-2 bg-gray-300">
        <span className="absolute top-5 left-10 lg:top-10 lg:left-20 text-lg font-bold">
          Weatherly
        </span>
        <div className="absolute flex flex-wrap items-center bottom-[136px] left-10 lg:bottom-[144px] lg:left-20">
          <div className="text-6xl lg:text-8xl">
            26°
          </div>
          <div className="mr-3 lg:ml-4">
            <div className="text-2xl  lg:text-4xl">London</div>
            <div>10:36 - Tuesday, 22 Oct '19</div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection
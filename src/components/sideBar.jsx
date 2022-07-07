import React from 'react'
import SearchBar from './searchBar'
import WeatherList from './weatherList'

const SideBar = () => {
  return (
    <div className="lg:col-span-1 lg:h-full bg-gray-100 p-8 md:p-12">
        <SearchBar />
       
        <span className="block mt-10">Birmingham</span>
        <span className="block mt-6">Birmingham</span>
        <span className="block mt-6">Birmingham</span>
        <span className="block mt-6">Birmingham</span>

        <hr className="my-10"/>
        <div className='mb-4'>Weather Details</div>
        <WeatherList />
        <hr className="mt-10"/>
    </div>
  )
}

export default SideBar
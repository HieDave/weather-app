import React from 'react'

const WeatherItem = ({object, index}) => {
  return (
    <>
        <div 
          key={index} 
          className="flex items-center justify-between mt-10"
        >
          <span>
            {object.type}
          </span>
          <span>
            {object.value}
          </span>
        </div>
    </>
  )
}

export default WeatherItem
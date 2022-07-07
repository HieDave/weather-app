import React from 'react'
import WeatherItem from './weatherItem'

const WeatherList = () => {
    const weatherDetails = [
        {
            type : "Cloud",
            value : "12%",
        },
        {
            type : "Humidity",
            value : "78%",
        },
        {
            type : "Wind",
            value : "1km/h",
        },
        {
            type : "Rain",
            value : "0mm",
        },
    ]
  return (
    <>
        {
            weatherDetails.map((object, index)=>{
                return (
                    <WeatherItem object={object} index={index} />
                )
            })
        }
    </>
  )
}

export default WeatherList
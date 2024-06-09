import React from 'react'
import { FaArrowLeftLong, FaLocationDot } from "react-icons/fa6";
import './Weather.css'; 

const Weather = ({
     name,
          feel_like,
          humidity,
          pressure,
          speed,
          celcius,
          item
}) => {

     const currentDate = new Date();
     const year = currentDate.getFullYear();
     const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
     const day = String(currentDate.getDate()).padStart(2, '0');

     const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className='weather'>
         <div className='upper'>
                 <h2>Weather App</h2>
         </div>
        <div className="middle">
              <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="Weather Icon" />
              <h2>{celcius}°C</h2>

              <div className="para">
                   <span>{item.weather[0].main}</span>
                   <p>{formattedDate}</p>
                    <div className='location'>
                          <FaLocationDot/>
                          <p>{name}</p>
                    </div>
                    
              </div>
        </div>
       
         <div className="detail">
              <div className='degree'>
                  <img src="https://www.freeiconspng.com/thumbs/temperature-icon-png/temperature-icon-png-1.png" alt="Temperature Icon" />
                   <div className="text">
                      <span>{feel_like}°C</span>
                      <p>Feels Like</p>
                   </div>
              </div>

              <div className='degree'>
                  <img src="https://cdn-icons-png.flaticon.com/512/1582/1582886.png" alt="Humidity Icon" />
                   <div className="text">
                      <span>{humidity}</span>
                      <p>Humidity</p>
                   </div>
              </div>
              
              <div className='degree'>
                  <img src="https://cdn-icons-png.flaticon.com/512/172/172922.png" alt="Wind Icon" />
                   <div className="text">
                      <span>{speed} m/s</span>
                      <p>Wind</p>
                   </div>
              </div>

              <div className='degree'>
                  <img src="https://www.nicepng.com/png/detail/516-5168726_sea-level-pressure-icon.png" alt="Pressure Icon" />
                   <div className="text">
                      <span>{pressure} hPa</span>
                      <p>Pressure</p>
                   </div>
              </div>
         </div>
    </div>
  )
}

export default Weather;

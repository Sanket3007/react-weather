import React from 'react';
import './weatherinfo.css'

const WeatherInfoComponent = () => {
    return (
        <div className="infocomponent">
            <img src="/icons/temp.svg" alt="" className="info-icon" />
            <p className="info-label">
                19:47
                <span>Sunrise</span>
            </p>
        </div>
    )
}

const WeatherInfo = () => {
    return (
        <>
            <div className="weather">
                <div className="condition"><span>30 C</span> | Cloudy</div>
                <img src="/icons/perfect-day.svg" alt="" />
            </div>

            <p className="location">London, GB</p>

            <p className="weather-info-label">Weather Info</p>

            <div className="info-container">
                <WeatherInfoComponent />
                <WeatherInfoComponent />
                <WeatherInfoComponent />
                <WeatherInfoComponent />

            </div>
        </>
    )
}

export default WeatherInfo
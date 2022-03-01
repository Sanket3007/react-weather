import React from 'react';
import './weatherinfo.css'

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
};

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <div className="infocomponent">
            <img src={WeatherInfoIcons[name]} alt="" className="info-icon" />
            <p className="info-label">
                {value}
                <span>{name}</span>
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
                <WeatherInfoComponent name="sunrise" value="" />
                <WeatherInfoComponent name="humidity" value="" />
                <WeatherInfoComponent name="wind" value="" />
                <WeatherInfoComponent name="pressure" value="" />

            </div>
        </>
    )
}

export default WeatherInfo
import React from 'react';
import './weatherinfo.css'

export const WeatherInfoIcons = {
    sunset: "/icons/temp.svg",
    sunrise: "/icons/temp.svg",
    humidity: "/icons/humidity.svg",
    wind: "/icons/wind.svg",
    pressure: "/icons/pressure.svg",
};

export const WeatherIcons = {
    "01d": "/icons/sunny.svg",
    "01n": "/icons/night.svg",
    "02d": "/icons/day.svg",
    "02n": "/icons/cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/perfect-day.svg",
    "04n": "/icons/cloudy-night.svg",
    "09d": "/icons/rain.svg",
    "09n": "/icons/rain-night.svg",
    "10d": "/icons/rain.svg",
    "10n": "/icons/rain-night.svg",
    "11d": "/icons/storm.svg",
    "11n": "/icons/storm.svg",
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

const WeatherInfo = (props) => {

    const {weather} = props;

    return (
        <>
            <div className="weather">
                <div className="condition"><span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>{`  |  ${weather?.weather[0].description}`}</div>
                <img src={WeatherIcons[weather?.weather[0].icon]} alt="" />
            </div>

            <p className="location">{`${weather?.name}, ${weather?.sys?.country}`}</p>

            <p className="weather-info-label">Weather Info</p>

            <div className="info-container">
                <WeatherInfoComponent name="sunrise" value="" />
                <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} />
                <WeatherInfoComponent name="wind" value={weather?.wind?.speed} />
                <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} />

            </div>
        </>
    )
}

export default WeatherInfo
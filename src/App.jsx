import { useState } from 'react'
import axios from "axios";
import City from '../components/City';
import WeatherInfo from '../components/WeatherInfo'
import './App.css'

function App() {

  // define states
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  // fetch the API
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  }

  return (
    <div className='main'>
      <p className='app-label'>React Weather</p>
      {city && weather ? (<WeatherInfo weather={weather}/>) : ( <City updateCity={updateCity} fetchWeather={fetchWeather}/>)}
    </div>
  )
}

export default App

import City from '../components/City'
import WeatherInfo from '../components/WeatherInfo'
import './App.css'

function App() {

  return (
    <div className='main'>
      <p className='app-label'>React Weather</p>
      <City/>
      {/* <WeatherInfo/> */}
    </div>
  )
}

export default App

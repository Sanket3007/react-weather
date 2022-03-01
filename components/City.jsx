import React from 'react';
import './city.css';

const City = (props) => {

    // use props
    const {updateCity, fetchWeather} = props;

  return (
    <>
        <img className='city-img' src="/icons/perfect-day.svg" alt="" />
        <p className="city-title">Find Weather of your city</p>

        {/*  */}
        <form className="city-search" onSubmit={fetchWeather}>
            <input type="text" onChange={(e) => updateCity(e.target.value)} placeholder="City" />
            <button type={"submit"}>Search</button>
        </form>
    </>
  )
}

export default City
import React from 'react';
import './city.css';

const City = () => {
  return (
    <>
        <img className='city-img' src="/icons/perfect-day.svg" alt="" />

        <p className="city-title">Find Weather of your city</p>
        <div className="city-search">
            <input type="text" placeholder="City" />
            <button>Search</button>
        </div>
    </>
  )
}

export default City
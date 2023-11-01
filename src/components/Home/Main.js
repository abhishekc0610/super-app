import React from 'react'

// Components
import ProfileCard from './ProfileCard'
import WeatherCard from './WeatherCard'
import NewsCard from './NewsCard'

// style
import "./Main.css"

function Main() {
  return (
    <div className='home-container'>
      <div className="left-home">
        <ProfileCard />
        <WeatherCard />
      </div>
      <div className="right-home">
        <NewsCard />
      </div>

    </div>
  )
}

export default Main;


import React from 'react'

// Components
import ProfileCard from './ProfileCard'
import DateCard from './DateCard'
import NewsCard from './NewsCard'

// style
import "./Main.css"

function Main() {
  return (
    <div className='home-container'>
      <div className="left-home">
        <ProfileCard />
        <DateCard />
      </div>
      <div className="right-home">
        <NewsCard />
      </div>

    </div>
  )
}

export default Main;


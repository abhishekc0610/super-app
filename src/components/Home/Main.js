import React from "react";

// Components
import ProfileCard from "./ProfileCard";
import WeatherCard from "./WeatherCard";
import NewsCard from "./NewsCard";
import NoteCard from "./NoteCard";

// style
import "./Main.css";
import TimerCard from "./TimerCard";

function Main() {
  return (
    <div className="home-container">
      {/* <div className="left-home">
        <ProfileCard />
        <WeatherCard />
      </div> */}
      <div className="left-home">
        <div className="left-home-top">
          <div className="profile-weather">
            <ProfileCard />
            <WeatherCard />
          </div>
          <div className="home-notes">
            <NoteCard />
          </div>
        </div>
        <div className="left-home-bottom">
          <TimerCard />
        </div>
      </div>
      <div className="right-home">
        <NewsCard />
      </div>
    </div>
  );
}

export default Main;

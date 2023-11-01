import React, { useEffect, useState } from "react";
import axios from "axios";

//styles
import "./WeatherCard.css";

//images
import Pressure from "../../assets/HomeAssets/pressure.png";
import Humidty from "../../assets/HomeAssets/humidity.png";
import Wind from "../../assets/HomeAssets/wind.png";

function WeatherCard() {
  const [weather, setWeather] = useState([]);
  const [date, setDate] = useState("00-00-0000");
  const [time, setTimne] = useState("");
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const apiKey = "a636e38cc8f54698b3101528230111";

    const fetchWeather = async () => {
      await axios
        .get(`http://api.weatherapi.com/v1/current.json?q=mumbai&key=${apiKey}`)
        .then((data) => {
          // console.log(data.data.current.last_updated);
          setWeather(data.data.current);
          setFlag(true);
        })
        .catch((err) => {
          console.log("Something went wrong.");
          console.log(err);
        });
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    const currDate = new Date(weather.last_updated);

    let dt = currDate.getDate();
    let month = currDate.getMonth() + 1; // month-> 0 to 11
    let year = currDate.getFullYear();

    month = month < 10 ? `0${month}` : month;
    dt = dt < 10 ? `0${dt}` : dt;

    const dateFormat = `${month}-${dt}-${year}`;
    setDate(dateFormat);
  });

  useEffect(() => {
    const currDate = new Date(weather.last_updated);

    let hour = currDate.getHours();
    let min = currDate.getMinutes();

    let timeZone = hour < 12 ? "AM" : "PM";
    hour = hour % 12;
    if (hour === 0 && timeZone === "PM") {
      hour = 12;
    }

    hour = hour < 10 ? `0${hour}` : hour;
    min = min < 10 ? `0${min}` : min;

    const timeFormat = `${hour}:${min} ${timeZone}`;
    setTimne(timeFormat);
  });

  return (
    <>
      {flag && (
        <div className="date-main">
          <div className="weather-head">
            <p>{date}</p>
            <p>{time}</p>
          </div>
          <div className="weather-foot">
            <div className="weather-first-box">
              <img src={weather.condition.icon} alt="" />
              <p>{weather.condition.text}</p>
            </div>
            <div className="vertical-line"></div>
            <div className="weather-second-box">
              <h1>{weather.feelslike_c}°C</h1>
              <div className="wind-pressure">
                <img src={Pressure} alt="" />
                <div className="pressure-val">
                  <p>{weather.pressure_mb} mbar</p>
                  <p>Pressure</p>
                </div>
              </div>
            </div>
            <div className="vertical-line"></div>
            <div className="weather-third-box">
              <div className="wind-speed">
                <img src={Wind} alt="" />
                <div className="wind-val">
                  <p>{weather.wind_kph} kp/h</p>
                  <p>Wind</p>
                </div>
              </div>
              <div className="humidity">
                <img src={Humidty} alt="" />
                <div className="humidity-val">
                  <p>{weather.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WeatherCard;

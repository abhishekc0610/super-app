import React, { useEffect, useState } from "react";
import axios from "axios";

// style
import "./NewsCard.css";

function NewsCard() {
  const [news, setNews] = useState([]);
  const [date, setDate] = useState("00-00-0000");
  const [time, setTimne] = useState("");

  useEffect(() => {
    const apiKey = "121825b964cd4f7ba3102886498bd977";

    const fetchNews = async () => {
      // await fetch(
      //   `https://newsapi.org/v2/everything?q=india&sortBy=popularity&apiKey=${apiKey}`
      // )
      //   .then(async (res) => {
      //     // console.log(res);
      //     return await res.json();
      //   })
      //   .then((data) => {
      //     // console.log(data.articles[0]);
      //     setNews(data.articles[0]);
      //   })
      //   .catch((err) => {
      //     alert("Something went wrong.");
      //     console.log(err);
      //   });

      await axios
        .get(
          `https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=${apiKey}`
        )
        .then((data) => {
          // console.log(data.data.articles[0]);
          setNews(data.data.articles[0]);
        })
        .catch((err) => {
          console.log("Something went wrong.");
          console.log(err);
        });
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const publishedDate = new Date(news.publishedAt);

    let dt = publishedDate.getDate();
    let month = publishedDate.getMonth() + 1; // month-> 0 to 11
    let year = publishedDate.getFullYear();

    month = month < 10 ? `0${month}` : month;
    dt = dt < 10 ? `0${dt}` : dt;

    const dateFormat = `${month}-${dt}-${year}`;
    setDate(dateFormat);
  }, [news.publishedAt]);

  useEffect(() => {
    const publishedDate = new Date(news.publishedAt);

    let hour = publishedDate.getHours();
    let min = publishedDate.getMinutes();

    let timeZone = hour < 12 ? "AM" : "PM";
    hour = hour % 12;
    if (hour === 0 && timeZone === "PM") {
      hour = 12;
    }

    hour = hour < 10 ? `0${hour}` : hour;
    min = min < 10 ? `0${min}` : min;

    const timeFormat = `${hour}:${min} ${timeZone}`;
    setTimne(timeFormat);
  }, [news.publishedAt]);

  return (
    <div className="news-main">
      <div
        className="news-head"
        style={{ backgroundImage: `url(${news.urlToImage})` }}
      >
        <div className="news-title">
          <h3>{news.title}</h3>
          <p>
            {date} | {time}
          </p>
        </div>
      </div>
      <div className="news-foot">
        <p>{news.content}</p>
      </div>
    </div>
  );
}

export default NewsCard;

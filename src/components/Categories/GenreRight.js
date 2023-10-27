import React from "react";
import MovieBox from "./MovieBox";

//styles
import "./GenreRight.css";

//images
import action from "../../assets/CategoriesAssets/action.png";
import drama from "../../assets/CategoriesAssets/drama.png";
import fantasy from "../../assets/CategoriesAssets/fantasy.png";
import fiction from "../../assets/CategoriesAssets/fiction.png";
import horror from "../../assets/CategoriesAssets/horror.png";
import music from "../../assets/CategoriesAssets/music.png";
import romance from "../../assets/CategoriesAssets/romance.png";
import thriller from "../../assets/CategoriesAssets/thriller.png";
import western from "../../assets/CategoriesAssets/western.png";

function GenreRight({ onAdd, goToNextPage }) {

  const genreInfo = [
    {
      genre: "Action",
      img: `${action}`,
      color: "#FF5209",
    },
    {
      genre: "Drama",
      img: `${drama}`,
      color: "#D7A4FF",
    },
    {
      genre: "Fantasy",
      img: `${fantasy}`,
      color: "#11B800",
    },
    {
      genre: "Fiction",
      img: `${fiction}`,
      color: "#84C2FF",
    },
    {
      genre: "Horror",
      img: `${horror}`,
      color: "#84C2FF",
    },
    {
      genre: "Music",
      img: `${music}`,
      color: "#7358FF",
    },
    {
      genre: "Romance",
      img: `${romance}`,
      color: "#FF4ADE",
    },
    {
      genre: "Thriller",
      img: `${thriller}`,
      color: "#11B800",
    },
    {
      genre: "Western",
      img: `${western}`,
      color: "#6CD061",
    },
  ];

  return (
    <div className="right-container">
      <div className="genre-info">
        {genreInfo.map((item) => {
          return (
            <MovieBox
              genreName={item.genre}
              imgSrc={item.img}
              color={item.color}
              onAdd={onAdd}
            />
          );
        })}

        {/* <button
          className="block"
          style={{ backgroundColor: `${genreInfo[0].color}` }}
          name={genreInfo[0].genre}
          onClick={submitGenre}
        >
          <p>{genreInfo[0].genre}</p>
          <img src={genreInfo[0].img} alt="" />
        </button>
        <div className="block" style={{ backgroundColor: "orange" }}>
          <p>{genreInfo[1].genre}</p>
          <img src={drama} alt="" />
        </div>
        <div className="block" style={{ backgroundColor: "orange" }}>
          <p>{genreInfo[2].genre}</p>
          <img src={fantasy} alt="" />
        </div>
        <div className="block" style={{ backgroundColor: "orange" }}>
          <p>{genreInfo[3].genre}</p>
          <img src={fiction} alt="" />
        </div>
        <div className="block" style={{ backgroundColor: "orange" }}>
          <p>{genreInfo[4].genre}</p>
          <img src={horror} alt="" />
        </div>
        <div className="block" style={{ backgroundColor: "orange" }}>
          <p>{genreInfo[5].genre}</p>
          <img src={music} alt="" />
        </div>
        <div className="block" style={{ backgroundColor: "orange" }}>
          <p>{genreInfo[6].genre}</p>
          <img src={romance} alt="" />
        </div>
        <div className="block" style={{ backgroundColor: "orange" }}>
          <p>{genreInfo[7].genre}</p>
          <img src={thriller} alt="" />
        </div>
        <div className="block" style={{ backgroundColor: "orange" }}>
          <p>{genreInfo[8].genre}</p>
          <img src={western} alt="" />
        </div> */}
        <button type="submit" className="next" onClick={() => goToNextPage()} >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default GenreRight;

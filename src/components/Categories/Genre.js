import React, { useEffect, useState } from "react";
import GenreLeft from "./GenreLeft";
import GenreRight from "./GenreRight";
import { useNavigate } from "react-router-dom";

function Genre() {
  const navigate = useNavigate();

  const [selectedGenres, setSelectedGenres] = useState([]);
  const [flag, setFlag] = useState(false);

  const checkGenre = (newGenre) => {
    if (selectedGenres.includes(newGenre)) {
      setSelectedGenres((prevGenres) => {
        return prevGenres.filter((item) => {
          return newGenre !== item;
        });
      });
    } else {
      setSelectedGenres((prevGenres) => {
        return [...prevGenres, newGenre];
      });
    }
    setFlag(false);
  };

  const goToNextPage = () => {
    if (selectedGenres.length < 3) {
      setFlag(true);
    } else {
      setFlag(false);
      navigate("/profile");
    }
  };

  useEffect(() => {
    localStorage.setItem("selectedGenres", JSON.stringify(selectedGenres));
  }, [selectedGenres]);

  return (
    <div
      style={{ display: "flex", backgroundColor: "#000", padding: "0 20px" }}
    >
      <GenreLeft
        genreList={selectedGenres}
        deleteGenre={checkGenre}
        flag={flag}
      />
      <GenreRight onAdd={checkGenre} goToNextPage={goToNextPage} />
    </div>
  );
}

export default Genre;

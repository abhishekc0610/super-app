import React from "react";

function MovieBox({ genreName, imgSrc, color, onAdd }) {

  return (
    <div
      className="block"
      style={{ backgroundColor: `${color}` }}
      onClick={() => onAdd(genreName)}
    >
      <p>{genreName}</p>
      <img src={imgSrc} alt="" />
    </div>
  );
}

export default MovieBox;

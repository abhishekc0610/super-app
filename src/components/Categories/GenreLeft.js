import React from "react";

//images
import cross from "../../assets/CategoriesAssets/cross.png";
import vector from "../../assets/CategoriesAssets/Vector.png";

// Styles
import "./GenreLeft.css";

function GenreLeft({ genreList, deleteGenre, flag }) {
  return (
    <div className="left-container">
      <div className="info">
        <h1>Super app</h1>
        <p>Choose your entertainment category</p>

        <div className="genre-container">
          {genreList.map((item) => {
            return (
              <>
                <span className="categories">
                  {item}
                  <img src={cross} alt="" onClick={() => deleteGenre(item)} />
                </span>
              </>
            );
          })}
        </div>

        {flag && (
          <div className="minThree">
            <p><img src={vector} alt="" /> Minimum 3 category required</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GenreLeft;

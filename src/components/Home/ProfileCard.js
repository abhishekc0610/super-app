import React from "react";

// style
import "./ProfileCard.css";

//images
import profile from "../../assets/HomeAssets/profile.png";

function ProfileCard() {
  const formData = JSON.parse(localStorage.getItem("formData"))
  const GenreData = JSON.parse(localStorage.getItem("selectedGenres"))
  // console.log({formData, GenreData});
  


  return (
    <div className="profile-main">
      <div className="profile-img">
        <img src={profile} alt="profile-pic" />
      </div>
      <div className="form-genre">
        <div className="form-data">
          <p>{formData.name}</p>
          <p>{formData.email}</p>
          <p>{formData.userName}</p>
        </div>
        <div className="genre-data">

        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

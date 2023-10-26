import React from "react";

// Components
import Banner from "../components/Registration/Banner";
import Register from "../components/Registration/Register";

function RegistrationPage() {
  return (
    <div style={{ display: "flex" }}>
      <Banner />
      <Register />
    </div>
  );
}

export default RegistrationPage;

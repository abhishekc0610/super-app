import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// styles
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [cred, setCred] = useState({
    name: "",
    userName: "",
    email: "",
    mobile: "",
    checked: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    let val;
    if (name === "checked") {
      val = checked;
    } else {
      val = value;
    }

    setCred((prevCred) => {
      return {
        ...prevCred,
        [name]: val,
      };
    });
  };

  function validateForm(name, userName, email, mobile, checked) {
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      errors.name = "Name should contain only letters and spaces";
    }

    if (!userName.trim()) {
      errors.userName = "Username is required";
    } else if (!/^[a-zA-Z0-9]+$/.test(userName)) {
      errors.userName = "Username should contain only letters and numbers";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Email is not valid";
    }

    if (!mobile.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (!/^[1-9]\d{9}$/.test(mobile)) {
      errors.mobile =
        "Mobile number should be a 10-digit number starting with a non-zero digit";
    }

    if (!checked) {
      errors.checked = "Please accept the terms and conditions";
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, userName, email, mobile, checked } = cred;

    const validationErrors = validateForm(
      name,
      userName,
      email,
      mobile,
      checked
    );

    if (Object.keys(validationErrors).length === 0) {
      localStorage.setItem("formData", JSON.stringify(cred));

      setTimeout(() => {
        navigate("/category");
      }, 1200);
    } else {
      Object.values(validationErrors).forEach((errorMsg) => {
        toast.error(errorMsg, {
          position: "bottom-right",
          autoClose: 2000,
        });
      });
    }
  };

  return (
    <div className="root">
      <div className="register">
        <div className="heading">
          <h1>Super app</h1>
          <p>Create your new account</p>
        </div>
        {/* <div className="formStyle"> */}
        <form action="" onSubmit={handleSubmit}>
          <input
            className="inp"
            type="text"
            placeholder="Name"
            name="name"
            value={cred.name}
            onChange={handleChange}
          />
          <input
            className="inp"
            type="text"
            placeholder="UserName"
            name="userName"
            value={cred.userName}
            onChange={handleChange}
          />
          <input
            className="inp"
            type="email"
            placeholder="Email"
            name="email"
            value={cred.email}
            onChange={handleChange}
          />
          <input
            className="inp"
            type="tel"
            placeholder="Mobile"
            name="mobile"
            value={cred.mobile}
            onChange={handleChange}
          />
          <div className="chk">
            <input
              id="chkbx"
              type="checkbox"
              name="checked"
              value={cred.checked}
              onChange={handleChange}
            />
            <label htmlFor="chkbx">
              Share my registration data with Superapp
            </label>
          </div>
          <button
            type="submit"
            className="btn"
            // onClick={(e) => {
            //   e.preventDefault();
            //   console.log(cred);
            // }}
          >
            SIGN UP
          </button>
          <p className="tnc">
            By clicking on Sign up. you agree to Superapp{" "}
            <span>Terms and Conditions of Use</span>
          </p>
          <p className="extra-info">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span>Privacy Policy</span>
          </p>
        </form>
        <ToastContainer />
        {/* </div> */}
      </div>
    </div>
  );
}

export default Register;

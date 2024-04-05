import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./register.css";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const handleRegister = (e) => {
    e.preventDefault();

    if (register.confirm_password !== register.password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords don't match!",
      });
      // Clear password fields
      setRegister({
        ...register,
        password: "",
        confirm_password: "",
      });
    } else {
      // Validate other required fields before submitting the form
      if (!register.email || !register.username || !register.password) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill in all required fields!",
        });
        return; // Exit early if any required field is missing
      }

      const regDataToSend = {
        username: register.username,
        email: register.email,
        password: register.password,
      };

      let url = "http://localhost:1337/api/auth/local/register";

      axios
        .post(url, regDataToSend)
        .then((response) => {
          // Clear registration form after successful registration
          setRegister({
            username: "",
            email: "",
            password: "",
            confirm_password: "",
          });
          Swal.fire({
            title: "Registration Successful!",
            text: "You can now log in.",
            icon: "success",
          });
          console.log(response);
          navigate("/login");
        })
        .catch((error) => {
          console.error("Registration failed:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Registration failed. Please try again later.",
          });
        });
    }
  };

  return (
    <div className="bg-register">
      <div className="wrapper-register">
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        ></link>
        <form action="">
          <h1>Register</h1>

          <div className="input-box-register" id="f_name">
            <input
              type="text"
              placeholder="Username*"
              required
              value={register.username}
              onChange={(e) =>
                setRegister({ ...register, username: e.target.value })
              }
            />
          </div>
          <div className="input-box-register">
            <input
              type="email"
              placeholder="Email*"
              required
              value={register.email}
              onChange={(e) =>
                setRegister({ ...register, email: e.target.value })
              }
            />
          </div>
          <div className="input-box-register">
            <input
              type="password"
              placeholder="Password*"
              required
              value={register.password}
              onChange={(e) =>
                setRegister({ ...register, password: e.target.value })
              }
            />
          </div>
          <div className="input-box-register">
            <input
              type="password"
              placeholder="Confirm Password*"
              required
              value={register.confirm_password}
              onChange={(e) =>
                setRegister({ ...register, confirm_password: e.target.value })
              }
            />
          </div>
          <div className="remember-forgot">
            <label>
              {" "}
              <input type="checkbox" /> accept cookies{" "}
            </label>
          </div>

          <button
            type="submit"
            className="btn-register"
            onClick={handleRegister}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

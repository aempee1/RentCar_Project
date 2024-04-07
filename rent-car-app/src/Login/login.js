import { useState } from 'react';
import React from 'react';
import './login.css'
import { NavLink ,useNavigate} from 'react-router-dom';
import Swal from "sweetalert2";
import axios from "axios";
import Cookies from 'js-cookie';


function Login() {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: "",

    })
    const handleLogin = (e) => {
        e.preventDefault(e);
        const loginDataToSend = {
            identifier: login.email, // This could be email or username
            password: login.password,
          };
          
          let url = "http://localhost:1337/api/auth/local";
          
          axios
            .post(url, loginDataToSend)
            .then((response) => {
              // Clear login form after successful login
              setLogin({
                email: "",
                password: "",
              });
          
              // Store token in cookie
              Cookies.set('token', response.data.jwt);
          
              Swal.fire({
                title: "Login Successful!",
                text: "You are now logged in.",
                icon: "success",
              });
              console.log(response);
              // Navigate to the desired page after successful login
              navigate("/form");
            })
            .catch((error) => {
              console.error("Login failed:", error);
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Login failed. Please check your credentials and try again.",
              });
            });
          
    

    }

    return (
       <div className='bg-login'>
            <div className="wrapper-login">
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box-login">
                        <input type="email" placeholder="Email*" required value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })}/>
                        <i class='bx bxs-user' ></i>
                    </div>
                    <div className="input-box-login">
                        <input type="password" placeholder="Password*" required value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })}/>
                        <i class='bx bxs-lock-alt' ></i>
                    </div>
                    <div className="remember-forgot">
                        <label> <input type='checkbox' /> remember forgot? </label>
                        <a href="#"> Forgot password</a>
                    </div>

                    <button type="submit" className="btn-login" onClick={handleLogin}>Sign in</button>

                    <div className="register-link">
                        <p> don't have an account ? <a><NavLink to='/register'>Register</NavLink></a></p>
                    </div>
                </form>
            </div>
         </div>
    );
}

export default Login
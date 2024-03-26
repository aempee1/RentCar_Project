import React from 'react';
import './register.css'
import Navbar from '../Navbar/navbar';
function Register() {
    return (
        <><Navbar />
        <div className="wrapper">
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <form action="">
                <h1>Register</h1>

                <div className="input-box" id="f_name">
                    <input type="text" placeholder="First Name*" required />

                </div>
                <div className="input-box" id="l_name">
                    <input type="text" placeholder="Last Name*" required />

                </div>

                <div className="input-box">
                    <input type="email" placeholder="Email*" required />

                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password*" required />

                </div>
                <div className="input-box">
                    <input type="password" placeholder="Confirm Password*" required />

                </div>
                <div className="remember-forgot">
                    <label> <input type='checkbox' /> accept cookies </label>

                </div>

                <button type="submit" className="btn">Sign Up</button>

            </form>
        </div></>

    );
}

export default Register
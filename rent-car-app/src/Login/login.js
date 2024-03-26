import React from 'react';
import './login.css'

function Login() {
    return (
       
            <div className="wrapper">
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="email" placeholder="Email*" required />
                        <i class='bx bxs-user' ></i>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password*" required />
                        <i class='bx bxs-lock-alt' ></i>
                    </div>
                    <div className="remember-forgot">
                        <label> <input type='checkbox' /> remember forgot? </label>
                        <a href="#"> Forgot password</a>
                    </div>

                    <button type="submit" className="btn">Sign in</button>

                    <div className="register-link">
                        <p> don't have an account ? <a href='/register'>Register</a></p>
                    </div>
                </form>
            </div>
      
    );
}

export default Login
import React from 'react';
import './payment.css'

function Payment() {
    return (
       <div className='bg-pay'>
            <div className="wrapper-pay">
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
                <form action="">
                    <h1>Payment</h1>
                    <div className="input-box-pay">
                        <input type="email" placeholder="Email*" required />
                        <i class='bx bxs-user' ></i>
                    </div>
                    <div className="input-box-pay">
                        <input type="password" placeholder="Password*" required />
                        <i class='bx bxs-lock-alt' ></i>
                    </div>
                    <div className="remember-forgot">
                        <label> <input type='checkbox' /> remember forgot? </label>
                        <a href="#"> Forgot password</a>
                    </div>

                    <button type="submit" className="btn-pay">Sign in</button>

                    <div className="register-link">
                        <p> don't have an account ? <a href='/register'>Register</a></p>
                    </div>
                </form>
            </div>
         </div>
    );
}

export default Payment
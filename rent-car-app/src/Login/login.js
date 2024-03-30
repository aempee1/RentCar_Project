import { useState } from 'react';
import React from 'react';
import './login.css'
import { NavLink ,useNavigate} from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        email: "",
        password: "",

    })
    const handleLogin = (e) => {
        e.preventDefault(e);
        console.log(login);
        navigate('/form')
        // if (register.confirm_password != register.password) {
        //     alert("รหัสผ่านที่ยืนยันไม่ตรงกับรหัสผ่านที่ป้อน");
        //     // ทำการล้างค่ารหัสผ่านทั้งคู่ใหม่
        //     setRegister({
        //         ...register,
        //         password: "",
        //         confirm_password: ""
        //     });

        // }else{
        //     console.log(register)
        //     navigate('/login')
        // }
    

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
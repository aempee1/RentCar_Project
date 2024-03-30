import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import './register.css'

function Register() {
    
    const navigate = useNavigate();
    const [register, setRegister] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        confirm_password: "",

    })

    const handleRegister = (e) => {
        e.preventDefault(e);

        if (register.confirm_password != register.password) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "password doesn't match!",
              });
            // ทำการล้างค่ารหัสผ่านทั้งคู่ใหม่
            setRegister({
                ...register,
                password: "",
                confirm_password: ""
            });

        }else{
            Swal.fire({
                title: "Good job!",
                text: "You clicked the button!",
                icon: "success"
              });
            console.log(register)
            navigate('/login')
        }
    

    }

    return (
        <div className='bg-register'>

            <div className="wrapper-register">
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
                <form action="">
                    <h1>Register</h1>

                    <div className="input-box-register" id="f_name">
                        <input type="text" placeholder="First Name*" required value={register.fname} onChange={(e) => setRegister({ ...register, fname: e.target.value })} />

                    </div>
                    <div className="input-box-register" id="l_name">
                        <input type="text" placeholder="Last Name*" required value={register.lname} onChange={(e) => setRegister({ ...register, lname: e.target.value })} />

                    </div>

                    <div className="input-box-register">
                        <input type="email" placeholder="Email*" required value={register.email} onChange={(e) => setRegister({ ...register, email: e.target.value })} />

                    </div>
                    <div className="input-box-register">
                        <input type="password" placeholder="Password*" required value={register.password} onChange={(e) => setRegister({ ...register, password: e.target.value })} />

                    </div>
                    <div className="input-box-register">
                        <input type="password" placeholder="Confirm Password*" required value={register.confirm_password} onChange={(e) => setRegister({ ...register, confirm_password: e.target.value })} />

                    </div>
                    <div className="remember-forgot">
                        <label> <input type='checkbox' /> accept cookies </label>

                    </div>

                    <button type="submit" className="btn-register" onClick={handleRegister}>Sign Up</button>

                </form>
            </div>
        </div>

    );
}

export default Register
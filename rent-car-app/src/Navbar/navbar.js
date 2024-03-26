import React from "react";
import "./navbar.css"

function Navbar() {
    return (
        <div className="header">
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
                <a href="#" className="brand">SamPle</a>
                <div className="navigation">
                    <div className="navigation-items">
                        <a href="#">Rent</a>
                        <a href="#">About</a>
                        <a href="#">Order</a>
                        <a href="#">Rule</a>
                        <a href="#">SignIn</a>
                    </div>
                </div>
            </div>
    );
}

export default Navbar;
    
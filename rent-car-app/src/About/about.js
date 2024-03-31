import React from "react";
import img from "../image_proj/bg-all.jpg";
import Navbar from "../Navbar/navbar";
import './about.css'
function About() {

    return (
        <><Navbar />
        <div className="body-about">
            <br />
            <br />
            <div className="heading">
                <h1>About Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    the industry's standard dummy text ever since the 1500s, when an unknown
                </p>
            </div>
            <div className="container">
                <section className="about">
                    <div className="about-image">
                        <img src={img} />
                    </div>
                    <div className="about-content">

                        <h2>Lorem Ipsum</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum
                        </p>
                        <br></br>
                        {/* <a href="#" className="read-more">Read More</a> */}
                    </div>
                </section>
            </div>
        </div></>
    )
}

export default About;
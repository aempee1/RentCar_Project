import React from "react";
import Navbar from "../Navbar/navbar";
import './about.css'
import { useState, useEffect } from "react";
import axios from "axios";




function About() {
    const [data_about, setData_about] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:1337/api/abouts");
                setData_about(res.data.data);
                console.log(res.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <><Navbar />
            {data_about && data_about.map((item) => {
                console.log(item)
                return (
                    <div className="body-about">
                        <br />
                        <br />
                        <div className="heading">
                            <h1>About Us</h1>
                            <p>
                                {item.attributes.address}
                            </p>
                        </div>
                        <div className="container">
                            <section className="about">
                                <div className="about-image">
                                    <img src={item.attributes.url_image} />
                                </div>
                                <div className="about-content">

                                    <h2>
                                        {item.attributes.topic}
                                    </h2>
                                    <p>
                                        {item.attributes.descriptions}
                                    </p>
                                    <br></br>
                                    {/* <a href="#" className="read-more">Read More</a> */}
                                </div>
                            </section>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default About;
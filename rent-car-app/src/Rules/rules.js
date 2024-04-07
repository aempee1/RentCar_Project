import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import './rules.css'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import Navbar from '../Navbar/navbar'

function Rules() {
    const [dataru, setDataru] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:1337/api/rules");
                setDataru(res.data.data);
                console.log(res.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return(
        <><Navbar />
            <div className="body-rules">
                <div className="section">
                    <div className="title">
                        <h1> Rules </h1>
                    </div>
                    <div className="services">
                        {dataru && dataru.map((item) => {
                            console.log(item)
                            return (
                            <div className="card">
                            <div className="icon">
                                <AirportShuttleIcon sx={{ fontSize: 70, color: "#fff" }}></AirportShuttleIcon>
                            </div>
                            <h2>{item.attributes.rule_topic}</h2>
                            <p>
                                {item.attributes.rule_description} </p>
                            {/* <a href="" class="button">Read More</a> */}
                        </div>
                            )
                        })}
                       
                    </div>
                </div>
            </div>
        </>     
    )
}

export default Rules;
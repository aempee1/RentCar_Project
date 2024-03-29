import React from "react";
import './rules.css'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import Navbar from '../Navbar/navbar'

function Rules() {

    return(
        <><Navbar />
            <div className="body-rules">
                <div className="section">
                    <div className="title">
                        <h1> Rules </h1>
                    </div>
                    <div className="services">
                        <div className="card">
                            <div className="icon">
                                <AirportShuttleIcon sx={{ fontSize: 70, color: "#fff" }}></AirportShuttleIcon>
                            </div>
                            <h2>Rules 1</h2>
                            <p>
                                but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages </p>
                            <a href="" class="button">Read More</a>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <AssignmentIndIcon sx={{ fontSize: 70, color: "#fff" }}></AssignmentIndIcon>
                            </div>
                            <h2>Rules 2</h2>
                            <p>
                                but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages </p>
                            <a href="" class="button">Read More</a>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <AssistantPhotoIcon sx={{ fontSize: 70, color: "#fff" }}></AssistantPhotoIcon>
                            </div>
                            <h2>Rules 3</h2>
                            <p>
                                but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages </p>
                            <a href="" class="button">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </>     
    )
}

export default Rules;
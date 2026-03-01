"use client";
import React, { useState } from 'react'
import "./Projects.css"

const Projects = () => {
    // Replace with your actual project data now that Sanity is removed
    const [prodata, setprodata] = useState([
        {
            title: "Sample Project",
            image: "https://via.placeholder.com/600x400.png?text=Sample+Project+Image", 
            desc: "This is a placeholder description for your project. You can update this static array in Projects.jsx with your actual project data!",
            hostUrl: "https://example.com",
            gitUrl: "https://github.com/example"
        }
    ])

    return (
        <div className='project'>
            <h1>Projects</h1>
            {
                prodata.map((data, index) => {
                    return (
                        <div className="mainbox" key={index}>
                            <h1>{data.title}</h1>
                            <div className="outerbox">
                                <img src={data.image} alt={data.title} />
                                <div className="proinfo">
                                    <p>{data.desc}</p>
                                </div>
                            </div>
                            <h3><b>Site Host Link :</b> <a target="_blank" style={{ color: "#0B0080 " }}
                                rel="noreferrer" href={data.hostUrl}>{data.hostUrl ? data.hostUrl : "--"}</a>  </h3>
                            <h3><b>GitHub Link :</b> <a target="_blank" style={{ color: "#0B0080 " }}
                                rel="noreferrer" href={data.gitUrl}>{data.gitUrl}</a> </h3>
                        </div>
                    )
                }
                )
            }
        </div >
    )
}

export default Projects

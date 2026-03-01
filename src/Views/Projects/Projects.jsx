"use client";
import React, { useState } from 'react'
import "./Projects.css"

const Projects = () => {
    const [prodata, setprodata] = useState([
        {
            title: "Voxabot",
            image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2670&auto=format&fit=crop", 
            desc: "Developed a voice AI platform supporting text-to-speech and speech-to-text using third-party APIs including Google, Azure, AWS, ElevenLabs, and Deepgram. Enabled users to upload videos and generate multilingual subtitles and transcripts.",
            techStack: "PHP, Laravel, Google APIs, Azure, AWS, ElevenLabs, Deepgram, Twilio",
            hostUrl: "",
            gitUrl: ""
        },
        {
            title: "PilotCity",
            image: "https://images.unsplash.com/photo-1546410531-bd4cb0153f36?q=80&w=2671&auto=format&fit=crop", 
            desc: "Built an education-focused platform enabling students to join programs, read content, practice questions, and upload answers in various formats including video. Developed role-based access for students and organizations.",
            techStack: "VueJs, NodeJS, ExpressJs, MongoDB, AWS, Twilio",
            hostUrl: "",
            gitUrl: ""
        },
        {
            title: "Human Resource Management System (HRMS)",
            image: "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2670&auto=format&fit=crop", 
            desc: "Developed a comprehensive HRMS platform for company data management, employee onboarding, leave tracking, and ticket tracking. Implemented RESTful APIs to handle data operations securely and efficiently.",
            techStack: "ReactJs, NodeJS, ExpressJs, MySQL, AWS",
            hostUrl: "",
            gitUrl: ""
        },
        {
            title: "Data Integrator",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop", 
            desc: "Developed a SaaS-based platform for seamless data integration and transformation. Allowed users to combine multiple files and perform operations in two or more columns, streamlining data workflows.",
            techStack: "JavaScript, NodeJS, AWS, ExpressJs, MySQL",
            hostUrl: "",
            gitUrl: ""
        },
        {
            title: "Hanooot",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop", 
            desc: "Built a scalable eCommerce platform that allows users to purchase products individually or in bulk. Implemented secure payment processing using Stripe integration and an admin dashboard.",
            techStack: "NextJs, EJS, NodeJS, ExpressJs, AWS, Elasticsearch, Stripe",
            hostUrl: "",
            gitUrl: ""
        },
        {
            title: "Agriculture Laravel Project",
            image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2638&auto=format&fit=crop", 
            desc: "Developed a web platform enabling farmers and dealers to create accounts, manage sales, purchases, and farm acreage records. Integrated predictive analytics to provide future trend insights.",
            techStack: "PHP, Laravel, Tailwind CSS, Mailgun, Twilio",
            hostUrl: "",
            gitUrl: ""
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
                                    <br />
                                    <p><strong>Tech Stack:</strong> {data.techStack}</p>
                                </div>
                            </div>
                            <h3><b>Site Host Link :</b> {data.hostUrl ? <a target="_blank" style={{ color: "#0B0080 " }} rel="noreferrer" href={data.hostUrl}>{data.hostUrl}</a> : "--"}</h3>
                        </div>
                    )
                }
                )
            }
        </div >
    )
}

export default Projects

"use client";
import React from 'react'
import { Paramjeet_Resume } from "../../assets/Index"

const Resume = () => {
    return (
        <div className="flex flex-col w-full h-[85vh] md:h-[100%] mt-[15px]">
            <object 
                data={Paramjeet_Resume} 
                type="application/pdf" 
                className="w-full h-full min-h-[700px] border-none"
            >
                <p>Your browser does not support PDFs. <a href={Paramjeet_Resume}>Download the PDF</a>.</p>
            </object>
        </div >
    )
}

export default Resume

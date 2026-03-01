"use client";
import React from 'react'
import { Paramjeet_Resume } from "../../assets/Index"
import "./Resume.css"

const Resume = () => {
    return (
        <div className='resume'>
            <object data={Paramjeet_Resume} type="application/pdf" width="100%" height="100%" >
            </object>
        </div >
    )
}

export default Resume

"use client";
import React from "react";
import { Linkedin, Github } from "../../assets/Index";

const Contact = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[90vh] mt-[15px]"> 
      <div className="text-left mt-[15px] p-[25px_40px] md:p-[30px_50px] font-bold text-[1.2rem] md:text-[16px] xl:text-[3rem] border-[1px] border-[color:var(--theme-black)] bg-[color:var(--theme-white)] rounded-[30px] shadow-sm transition-all duration-400 ease hover:border-[5px] hover:border-[color:var(--theme-black)] hover:scale-110 cursor-pointer">
        <h1>Hi, Contact Me !</h1>
        <br />
        <br />
        <a 
            href={'mailto:paramjeetsingh7023@gmail.com'} 
            className="no-underline text-[color:var(--text-color)] font-light flex items-center gap-[10px] hover:text-[#ff1100] transition-all"
        >
            <span className="font-bold underline text-[#ff1100]">@</span>
            <span>paramjeetsingh7023@gmail.com</span>
        </a>    
        <a 
            href={'tel:+918441861883'} 
            className="no-underline text-[color:var(--text-color)] font-light flex items-center gap-[10px] mt-[20px] hover:text-[#0B0080] transition-all"
        >
            <span className="font-bold text-[#0B0080]">📞</span>
            <span>+91-8441861883</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;

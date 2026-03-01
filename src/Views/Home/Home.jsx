"use client";
import React from 'react'
import { Hello, Wave, Paramjeet_Resume } from "../../assets/Index"

const Home = () => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(Paramjeet_Resume).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'ParamJeet_Resume.pdf';
                alink.click();
            }).catch(blobErr => console.error("Error creating blob:", blobErr));
        }).catch(fetchErr => console.error("Error fetching PDF:", fetchErr));
    }

    return (
        <div className='flex items-center justify-center min-h-[85vh] py-[40px] w-full' >
            <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full px-[20px] md:px-[60px] lg:px-[100px] max-w-[1500px] gap-[40px] md:gap-[15px]">
                <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left gap-[25px] w-full md:w-[55%] animate-slide-up delay-100">
                    <img src={Hello} alt="Hello" className="hidden lg:block w-[140px] transition-all duration-400 ease hover:ml-[70px] hover:scale-110" />
                    
                    <h1 className="font-semibold text-[2.5rem] md:text-[4rem] flex flex-wrap items-center justify-center md:justify-start gap-2">
                        <span>I'm</span> 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#df580c] to-[#fd993d]">Paramjeet Singh</span> 
                        <span>
                            <img src={Wave} alt="Wave" className="w-[20px] md:w-[30px] transition-transform duration-700 hover:rotate-[45deg]" />
                        </span>
                    </h1>
                    
                    <h3 className="font-light text-[1.5rem] md:text-[2rem] font-serif leading-snug">
                       I am a Full Stack Developer with 3+ years of experience in building scalable, high-performance web applications using React.js, Node.js, Express.js, Next.js, and Laravel.
                    </h3>
                    
                    <div className="flex justify-center md:justify-start gap-[20px] mt-[10px] w-full">
                        <button 
                            onClick={onButtonClick} 
                            className="w-[120px] md:w-[150px] h-[40px] md:h-[50px] bg-gradient-to-r from-[#df580c] to-[#fd993d] border-[3px] border-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] rounded-[10px] text-[#e9e4f0] font-bold text-[1.4rem] transition-transform duration-400 hover:scale-105 cursor-pointer"
                        >
                            Download CV
                        </button>
                        <a href="https://www.linkedin.com/in/paramjeet-singh-rathore-b05576183/" target="_blank" rel="noreferrer">
                            <button className="w-[120px] md:w-[150px] h-[40px] md:h-[50px] bg-gradient-to-r from-[#434343] to-[#000000] border-[3px] border-[color:var(--theme-black)] shadow-[0_10px_25px_rgba(0,0,0,0.25)] rounded-[10px] text-white font-bold text-[1.4rem] transition-transform duration-400 hover:scale-105 cursor-pointer">
                                Get in Touch!
                            </button>
                        </a>
                    </div>
                </div>

                <div className="w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] relative animate-fade-in delay-300">
                    {/* Pulsing Backglow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#df580c] to-[#000000] rounded-full blur-[40px] opacity-30 animate-pulse"></div>
                    <div 
                        className="w-full h-full bg-[url('/assets/Dp.jpg')] bg-cover relative z-10 rounded-[40%] transition-all duration-[600ms] ease-in-out hover:rounded-full hover:shadow-2xl animate-float shadow-[0_20px_50px_rgba(0,0,0,0.3)]" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

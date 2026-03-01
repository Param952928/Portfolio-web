"use client";
import React from 'react'
import { Skillsdata } from '../../data/skilldata'

const Skill = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-[40px] w-full my-8 min-h-[85vh] py-16">
            <h1 className="border-b-[4px] border-[color:var(--theme-black)] text-[color:var(--theme-black)] text-[3.5rem] mt-[10px] mb-[40px] font-extrabold tracking-tight animate-slide-up">
                Technical Skills <span className="text-[#0B0080]">.</span>
            </h1>
            <div className="flex flex-row flex-wrap justify-center gap-[30px] md:gap-[50px] lg:gap-[60px] w-full text-[1.3rem] max-w-[1200px]">
                {
                    Skillsdata.map((item, key) => {
                        return (
                            <div 
                                className="flex flex-col items-center justify-center w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px] bg-gradient-to-br from-[color:var(--theme-black)] to-[#434343] rounded-[30px] shadow-lg border border-[color:var(--theme-white)]/10 transition-all duration-500 ease hover:-translate-y-4 hover:scale-110 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] cursor-pointer animate-slide-up relative overflow-hidden" 
                                style={{ animationDelay: `${key * 75}ms` }}
                                key={key}
                            >
                                <div className="absolute top-[-30px] right-[-30px] w-[100px] h-[100px] bg-white opacity-5 rounded-full blur-[20px]"></div>
                                <img src={item.img} alt={item.name} className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] drop-shadow-md z-10" />
                                <h4 className="text-[#e9e4f0] mt-[15px] font-bold text-[0.9rem] lg:text-[1.2rem] hidden md:block z-10 opacity-90 text-center tracking-wide">
                                    {item.name}
                                </h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skill

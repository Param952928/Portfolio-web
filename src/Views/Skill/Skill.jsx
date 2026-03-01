"use client";
import React from 'react'
import { Skillsdata } from '../../data/skilldata'

const Skill = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-[40px] w-full my-8">
            <h1 className="border-b-[1px] border-[color:var(--theme-black)] text-[3rem] mt-[10px]">
                Skills
            </h1>
            <div className="flex flex-row flex-wrap justify-center gap-[30px] md:gap-[50px] lg:gap-[80px] w-full text-[1.3rem]">
                {
                    Skillsdata.map((item, key) => {
                        return (
                            <div 
                                className="flex flex-col items-center justify-center w-[75px] h-[65px] sm:w-[100px] sm:h-[75px] md:h-[85px] lg:w-[150px] lg:h-[120px] bg-[color:var(--theme-black)] rounded-[20px] transition-transform duration-400 ease hover:scale-110 cursor-pointer" 
                                key={key}
                            >
                                <img src={item.img} alt={item.name} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[80px] lg:h-[80px]" />
                                <h4 className="text-[color:var(--theme-white)] mt-[10px] font-semibold text-[0.8rem] lg:text-[1rem] hidden lg:block">
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

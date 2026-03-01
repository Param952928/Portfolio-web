import React from "react";
import { Facebook, Github, Instagram, Linkedin, Telegram, Twitter, mail } from "../../assets/Index";

const Fixeditems = () => {
  return (
    <>
      <div className="fixed -left-[120px] md:-left-[120px] sm:-left-[110px] max-[480px]:-left-[110px] bottom-[135px] rotate-[270deg] z-50 flex items-center">
        <a href="https://github.com/Paramjeetsinghrathore?tab=repositories" target="_blank" rel="noreferrer">
          <img src={Github} alt="Github" className="h-[25px] sm:h-[30px] ml-[20px] rotate-[90deg] theme-logo transition-all duration-350 ease shadow-[0_2px_4px_0_rgba(0,0,0,0.24)] hover:shadow-[0_8px_10px_1px_rgba(0,0,0,0.2)] hover:-translate-y-2 rounded-full cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/paramjeet-singh-rathore-b05576183/" target="_blank" rel="noreferrer">
          <img src={Linkedin} alt="LinkedIn" className="h-[25px] sm:h-[30px] ml-[20px] rotate-[90deg] theme-logo transition-all duration-350 ease shadow-[0_2px_4px_0_rgba(0,0,0,0.24)] hover:shadow-[0_8px_10px_1px_rgba(0,0,0,0.2)] hover:-translate-y-2 rounded-full cursor-pointer" />
        </a>
        <a href="mailto:paramjeetsingh7023@gmail.com" target="_blank" rel="noreferrer">
          <img src={mail} alt="Email" className="h-[25px] sm:h-[30px] ml-[20px] rotate-[90deg] theme-logo transition-all duration-350 ease shadow-[0_2px_4px_0_rgba(0,0,0,0.24)] hover:shadow-[0_8px_10px_1px_rgba(0,0,0,0.2)] hover:-translate-y-2 rounded-full cursor-pointer" />
        </a>
      </div>
      
      <a 
        className="fixed -right-[50px] sm:-right-[80px] bottom-[135px] inline-block pl-[20px] border-l-[5px] border-[color:var(--theme-black)] font-semibold text-[1.5rem] rotate-[270deg] transition-all duration-400 ease hover:scale-105 cursor-pointer z-50 text-[color:var(--text-color)] no-underline"
        href="mailto:paramjeetsingh7023@gmail.com"
      >
        paramjeetsingh7023@gmail.com
      </a>
    </>
  );
};

export default Fixeditems;

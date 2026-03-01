"use client";
import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-[85vh] py-16">
      <div className="flex flex-col relative w-[90%] md:w-[85%] lg:w-[80%] max-w-[1400px]">
        
        <div className="flex items-center gap-8 w-full mb-[50px]">
          <h1 className="text-[3.5rem] md:text-[4.5rem] whitespace-nowrap font-extrabold text-[color:var(--theme-black)] tracking-tight">
            About Me <span className="text-[#0B0080]">.</span>
          </h1>
          <span className="hidden md:block flex-grow h-[3px] bg-gradient-to-r from-[color:var(--theme-black)] to-transparent opacity-30 mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px] w-full">
          {/* Main Introduction Card */}
          <div className="lg:col-span-7 bg-transparent border-[2px] border-[color:var(--theme-black)] rounded-[30px] p-[30px] md:p-[40px] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400">
            <h2 className="text-[2.5rem] font-bold mb-[20px] text-[color:var(--theme-black)]">
               Who am I?
            </h2>
            <p className="font-light text-[1.4rem] md:text-[1.6rem] leading-relaxed font-sans text-[color:var(--text-color)] opacity-90 text-justify">
              Hello, I am <strong className="font-bold">Paramjeet Singh</strong>. I am a Full Stack Developer with <strong className="font-bold border-b-[2px] border-[color:var(--theme-black)]">3+ years of experience</strong> in building scalable, high-performance web applications using React.js, Node.js, Express.js, Next.js, and Laravel.
              <br/><br/>
              Overall, I am passionate about leveraging modern frameworks and cloud technologies to solve complex business problems and continuously improving my skills to deliver top-quality software solutions.
            </p>
          </div>

          {/* Tech Stack Highlights */}
          <div className="lg:col-span-5 bg-[color:var(--theme-black)] text-[color:var(--theme-white)] rounded-[30px] p-[30px] md:p-[40px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 relative overflow-hidden">
            <div className="absolute top-[-50px] right-[-50px] w-[200px] h-[200px] bg-white opacity-10 rounded-full blur-[40px]"></div>
            <h2 className="text-[2.2rem] font-bold mb-[25px]">
              Technical Prowess
            </h2>
            <div className="flex flex-col gap-[20px] text-[1.4rem] font-light leading-relaxed opacity-95">
              <p className="border-b-[1px] border-[color:var(--theme-white)] border-opacity-20 pb-4">
                <strong className="text-[#fd993d]">Core:</strong> JavaScript, TypeScript, PHP
              </p>
              <p className="border-b-[1px] border-[color:var(--theme-white)] border-opacity-20 pb-4">
                <strong className="text-[#fd993d]">Architecture:</strong> REST APIs, MVC, Serverless
              </p>
              <p>
                <strong className="text-[#fd993d]">Databases:</strong> MySQL, MongoDB, DynamoDB
              </p>
            </div>
          </div>

          {/* Cloud & APIs Card */}
          <div className="lg:col-span-12 bg-gradient-to-br from-[color:var(--theme-black)] to-[#434343] text-[#e9e4f0] rounded-[30px] p-[30px] md:p-[40px] shadow-lg flex flex-col md:flex-row items-center justify-between gap-[30px] hover:shadow-2xl hover:-translate-y-2 transition-all duration-400">
             <div className="w-full md:w-[70%] z-10">
                 <h2 className="text-[2.5rem] font-bold mb-[20px]">Cloud & Integrations</h2>
                 <p className="font-light text-[1.4rem] md:text-[1.6rem] leading-relaxed opacity-95 text-justify">
                    I have extensive experience deploying cloud-based solutions on <strong className="font-bold underline">AWS</strong> (EC2, Lambda, S3, RDS, Cognito) and integrating powerful third-party APIs such as <strong className="font-bold text-[#fd993d]">Twilio, Mailgun, Deepgram, and OpenAI</strong> to deliver intelligent automation and enhanced user experiences.
                 </p>
             </div>
             <div className="w-full md:w-[30%] flex justify-center md:justify-end relative">
                 <div className="text-[7rem] md:text-[9rem] font-extrabold text-white opacity-10 select-none tracking-tighter mr-4">
                    AWS
                 </div>
             </div>
          </div>

        </div>

        <div className="w-full flex justify-center mt-[80px]">
          <p className="w-[40%] font-normal text-center border-b-[4px] border-[color:var(--theme-black)] opacity-20 rounded-full"></p>
        </div>
      </div>
    </div>
  );
};

export default About;

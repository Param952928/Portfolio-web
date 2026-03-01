"use client";
import React, { useState } from "react";

const Projects = () => {
  const [prodata, setprodata] = useState([
    {
      title: "Voxabot",
      image:
        "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2670&auto=format&fit=crop",
      desc: "Developed a voice AI platform supporting text-to-speech and speech-to-text using third-party APIs including Google, Azure, AWS, ElevenLabs, and Deepgram. Enabled users to upload videos and generate multilingual subtitles and transcripts.",
      techStack:
        "PHP, Laravel, Google APIs, Azure, AWS, ElevenLabs, Deepgram, Twilio",
      hostUrl: "https://voxabot.com",
    },
    {
      title: "PilotCity",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
      desc: "Built an education-focused platform enabling students to join programs, read content, practice questions, and upload answers in various formats including video. Developed role-based access for students and organizations.",
      techStack: "VueJs, NodeJS, ExpressJs, MongoDB, AWS, Twilio",
      hostUrl: "https://pilotcity.com",
    },
    {
      title: "Human Resource Management System (HRMS)",
      image:
        "https://images.unsplash.com/photo-1554774853-719586f82d77?q=80&w=2670&auto=format&fit=crop",
      desc: "Developed a comprehensive HRMS platform for company data management, employee onboarding, leave tracking, and ticket tracking. Implemented RESTful APIs to handle data operations securely and efficiently.",
      techStack: "ReactJs, NodeJS, ExpressJs, MySQL, AWS",
      hostUrl: "",
    },
    {
      title: "Data Integrator",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      desc: "Developed a SaaS-based platform for seamless data integration and transformation. Allowed users to combine multiple files and perform operations in two or more columns, streamlining data workflows.",
      techStack: "JavaScript, NodeJS, AWS, ExpressJs, MySQL",
      hostUrl: "",
    },
    {
      title: "Hanooot",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2670&auto=format&fit=crop",
      desc: "Built a scalable eCommerce platform that allows users to purchase products individually or in bulk. Implemented secure payment processing using Stripe integration and an admin dashboard.",
      techStack: "NextJs, EJS, NodeJS, ExpressJs, AWS, Elasticsearch, Stripe",
      hostUrl: "https://hanooot.com",
    },
    {
      title: "Agriculture Laravel Project",
      image:
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2638&auto=format&fit=crop",
      desc: "Developed a web platform enabling farmers and dealers to create accounts, manage sales, purchases, and farm acreage records. Integrated predictive analytics to provide future trend insights.",
      techStack: "PHP, Laravel, Tailwind CSS, Mailgun, Twilio",
      hostUrl: "",
    },
  ]);

  return (
    <div className="flex flex-col items-center text-[color:var(--text-color)] w-full py-[40px] min-h-[85vh]">
      <h1 className="border-b-[4px] border-[color:var(--theme-black)] text-[color:var(--theme-black)] mt-[10px] text-[3.5rem] mb-[60px] font-extrabold tracking-tight animate-slide-up">
        Projects <span className="text-[#0B0080]">.</span>
      </h1>
      {prodata.map((data, index) => {
        return (
          <div
            className="mt-[20px] mb-[40px] bg-[color:var(--theme-white)]/30 backdrop-blur-md border-[1px] border-[color:var(--theme-black)]/20 rounded-[40px] p-[30px] md:p-[50px] flex flex-col items-center justify-evenly w-full lg:w-[95%] xl:w-[90%] max-w-[1300px] h-auto gap-[20px] relative text-[color:var(--text-color)] transition-all duration-500 ease hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:border-[color:var(--theme-black)]/40 hover:-translate-y-3 animate-slide-up"
            style={{
              animationDelay: `${index * 150}ms`,
              opacity: 0,
              animationFillMode: "forwards",
            }}
            key={index}
          >
            <h1 className="font-bold text-[2.8rem] border-b-[3px] border-[color:var(--theme-black)] text-[color:var(--theme-black)] pb-2 mb-4 w-full text-center lg:text-left">
              {data.title}
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-[10px] gap-[30px] lg:gap-[50px]">
              <img
                src={data.image}
                alt={data.title}
                className="rounded-[20px] w-full lg:w-[45%] h-auto max-h-[350px] object-cover shadow-lg border-[1px] border-[color:var(--theme-black)]"
              />
              <div className="w-full lg:w-[50%] text-left text-[1.4rem] lg:text-[1.8rem] self-start flex flex-col justify-center h-full">
                <p className="font-light text-[color:var(--text-color)] leading-relaxed text-justify">
                  {data.desc}
                </p>
                <br />
                <p className="text-[color:var(--theme-black)] text-[1.3rem] lg:text-[1.6rem]">
                  <strong>Tech Stack:</strong> {data.techStack}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full justify-between items-center mt-[30px] pt-[20px] border-t-[1px] border-[color:var(--theme-black)] opacity-80">
              <h3 className="font-normal text-[1.2rem] lg:text-[1.4rem] text-[color:var(--text-color)]">
                <b>Site Host Link :</b>
                {data.hostUrl ? (
                  <a
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 ml-2 font-bold hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 hover:scale-105"
                    rel="noreferrer"
                    href={
                      data.hostUrl.startsWith("http")
                        ? data.hostUrl
                        : `https://${data.hostUrl}`
                    }
                  >
                    {data.hostUrl}
                  </a>
                ) : (
                  <span className="ml-2">--</span>
                )}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;

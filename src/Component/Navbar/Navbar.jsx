"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Logo, Moon_Black, Light, cross, menuicon } from "../../assets/Index";

const Navbar = () => {
  const pathname = usePathname() || '/';
  const [isActive, setisActive] = useState(false);
  const [activeCatagaryIndex, setactiveCatagaryIndex] = useState("");

  const [theme, settheme] = useState("darktheme");

  const router = useRouter();
  const navigate = (path) => router.push(path);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const changetheme = () => {
    if (theme === "lighttheme") {
      settheme("darktheme");
    } else {
      settheme("lighttheme");
    }
  };

  useEffect(() => {
    const url = pathname;
    var extractedText = url.substring(1);
    extractedText
      ? setactiveCatagaryIndex(extractedText + "page")
      : setactiveCatagaryIndex("homepage");
  }, [pathname]);

  const navLinks = [
    { id: "homepage", path: "/", label: "Home" },
    { id: "aboutpage", path: "/about", label: "About" },
    { id: "resumepage", path: "/resume", label: "Resume" },
    { id: "skillpage", path: "/skill", label: "Skills" },
    { id: "projectpage", path: "/project", label: "Projects" },
    { id: "contactpage", path: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-row items-center justify-between rounded-[10px] w-full">
      <div className="flex items-center justify-center gap-[25px]">
        <img src={Logo} alt="Logo" className="theme-logo transition-transform duration-700 hover:rotate-[360deg] w-[25px] sm:w-[50px] md:w-auto" />
        <h1
          className="font-bold text-[2rem] md:text-[2.5rem] cursor-pointer"
          onClick={() => {
            navigate("/");
            setactiveCatagaryIndex("homepage");
          }}
        >
          Paramjeet Singh
        </h1>
      </div>
      <div className="flex items-center">
        <ul className="hidden md:flex items-center list-none m-0 p-0">
          <li className="flex items-center">
            {navLinks.map((link) => (
              <span
                key={link.id}
                id={link.id}
                className={`mr-[25px] font-semibold text-[1.4rem] no-underline text-[color:var(--theme-black)] cursor-pointer ${
                  activeCatagaryIndex === link.id ? "border-b-[2px] border-[color:var(--theme-black)]" : ""
                }`}
                onClick={(e) => {
                  navigate(link.path);
                  setactiveCatagaryIndex(link.id);
                }}
              >
                {link.label}
              </span>
            ))}
          </li>
        </ul>
        <img
          onClick={() => changetheme()}
          src={theme === "darktheme" ? Light : Moon_Black}
          alt="Theme toggle"
          className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] cursor-pointer mr-[10px] md:mr-[0px]"
        />
        <img
          className="theme-menu md:hidden flex w-[20px] h-[20px] mx-[10px] cursor-pointer"
          src={menuicon}
          alt="Menu"
          onClick={() => setisActive(!isActive)}
        />
      </div>

      <div
        className={`w-full overflow-hidden h-auto py-[20px] bg-[color:var(--theme-black)] z-[600] fixed top-0 left-0 transition-transform duration-800 ease-in-out border-[10px] border-transparent ${
          isActive ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <img
          className="absolute right-[10px] top-[10px] filter drop-shadow-[0_0_0_var(--theme-white)] cursor-pointer z-50"
          src={cross}
          onClick={() => setisActive(false)}
          alt="Close"
        />
        <ul className="m-0 p-0 w-full">
          <li className="flex flex-col gap-[10px] px-[10px] py-[20px] text-[color:var(--theme-black)]">
            {navLinks.map((link) => (
              <span
                key={link.id}
                className={`text-[color:var(--theme-white)] text-[2rem] cursor-pointer ${
                  activeCatagaryIndex === link.id ? "border-b-[2px] border-[color:var(--theme-black)]" : ""
                }`}
                onClick={(e) => {
                  navigate(link.path);
                  setactiveCatagaryIndex(link.id);
                  setisActive(false);
                }}
              >
                {link.label}
              </span>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

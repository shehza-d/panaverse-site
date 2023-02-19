"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from "../public/panaverse-logo.png";
// import { useContext } from "react";
// import { GlobalContext } from "../context/context";

export default function Navbar({ setDarkTheme, darkTheme }: any) {
  // const { state, dispatch } = useContext(GlobalContext);
  const [dropDownState, setDropDownState] = useState(false);
  const handleDropDownState = () => setDropDownState(!dropDownState);
  // const dropDownBtn = useRef<HTMLButtonElement>(null);
  // const dropDown = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleListener = (e: any) => {
      if (!e.target.matches(".drop")) setDropDownState(false);
    };
    window.addEventListener("click", handleListener);

    return () => window.removeEventListener("click", handleListener);
  }, []);

  return (
    <nav className="fixed top-0 flex w-screen items-center justify-around	 bg-white bg-opacity-40 py-2 backdrop-blur-md transition-all  duration-300 ease-in-out dark:bg-slate-700 dark:bg-opacity-40">
      <div className="flex items-center gap-12">
        <Image src={logo} width={150} height={150} alt="Logo of Panaverse" />
        <ul className="flex gap-4 text-xl font-medium text-gray-900 transition-all duration-300 dark:text-slate-200">
          <li className="">Home</li>
          <li className="">About</li>
          <li className="relative">
            <button
              // ref={dropDownBtn}
              className="drop  flex items-center focus:outline-none"
              // id="dropdownDefaultButton"
              type="button"
              onClick={handleDropDownState}
            >
              Courses
              <svg
                className="ml-2 h-4 w-4"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {dropDownState ? (
              <ul className=" drop  absolute left-2 top-16 z-10  w-96 cursor-pointer divide-y divide-gray-50  rounded-lg bg-white bg-opacity-40 px-2 py-2 text-sm text-black shadow backdrop-blur-md dark:divide-slate-600 dark:bg-gray-700 dark:bg-opacity-40  dark:text-gray-200">
                <li>
                  <span className="block px-4 py-2 hover:bg-gray-400  dark:hover:bg-gray-600">
                    Web 3.0 and Metaverse
                  </span>
                </li>
                <li>
                  <span className="block px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    Artificial Intelligence (AI) and Deep Learning
                  </span>
                </li>
                <li>
                  <span className="block px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    Cloud-Native Computing
                  </span>
                </li>
                <li>
                  <span className="block px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    Ambient Computing and IoT
                  </span>
                </li>
                <li>
                  <span className="block px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    Genomics and Bioinformatics
                  </span>
                </li>
                <li>
                  <span className="block px-4 py-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                    Network Programmability and Automation
                  </span>
                </li>
              </ul>
            ) : null}
          </li>
          <li className="">Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-8 transition-all duration-300">
        <button className="p-2">
          <Image
            className="fill-red-300"
            src="/bell.svg"
            alt="bell icon"
            width={24}
            height={24}
          />
        </button>
        <div className="inline-block h-5 rounded-md border-[1px] border-slate-900 transition-all duration-300 dark:border-neutral-100"></div>
        <button className="p-2" onClick={() => setDarkTheme(!darkTheme)}>
          <Image
            className="fill-accent text-accent"
            src={`${darkTheme ? "/darkMode.svg" : "/lightMode.svg"}`}
            alt="bell icon"
            width={24}
            height={24}
          />
        </button>
        <button className="rounded-md bg-accent  py-2 px-4 text-gray-900 transition-all duration-300 hover:bg-accent hover:bg-opacity-90 dark:text-gray-100">
          Apply Now
        </button>
      </div>
    </nav>
  );
}

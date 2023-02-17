"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from "../public/panaverse-logo.png";

export default function Navbar() {
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
    <nav className="fixed top-0 flex w-full items-center justify-around bg-white bg-opacity-10 py-2 backdrop-blur-md">
      <div className="flex items-center gap-12">
        <Image src={logo} width={150} height={150} alt="Logo of Panaverse" />
        <ul className="flex gap-4 text-xl font-medium text-slate-200">
          <li className="">Home</li>
          <li className="">About</li>
          <li className="">
            <button
              // ref={dropDownBtn}
              className="drop relative flex items-center focus:outline-none"
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
              <ul className=" drop  absolute right-24 z-10 w-96 divide-y  divide-gray-100 rounded-lg bg-white px-2 py-2 text-sm text-gray-500 shadow dark:bg-gray-700  dark:text-gray-200">
                <li>
                  <span className="block px-4 py-2 hover:bg-gray-100  dark:hover:bg-gray-600">
                    Web 3.0 and Metaverse
                  </span>
                </li>
                <li>
                  <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Artificial Intelligence (AI) and Deep Learning
                  </span>
                </li>
                <li>
                  <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Cloud-Native Computing
                  </span>
                </li>
                <li>
                  <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Ambient Computing and IoT
                  </span>
                </li>
                <li>
                  <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Genomics and Bioinformatics
                  </span>
                </li>
                <li>
                  <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Network Programmability and Automation
                  </span>
                </li>
              </ul>
            ) : null}
          </li>
          <li className="">Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-8">
        <button className="p-2">
          <Image
            className="fill-red-300"
            src="/bell.svg"
            alt="bell icon"
            width={24}
            height={24}
          />
        </button>
        <div className="inline-block h-5 rounded-md border-[1px] border-neutral-100"></div>
        <button className="p-2">
          <Image
            className="fill-accent text-accent"
            src="/lightMode.svg"
            alt="bell icon"
            width={24}
            height={24}
          />
        </button>
        <button className="rounded-md bg-accent py-2 px-4 text-gray-100 hover:bg-accent hover:bg-opacity-90 dark:text-gray-900">
          Apply Now
        </button>
      </div>
    </nav>
  );
}

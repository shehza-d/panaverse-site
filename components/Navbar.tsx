"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../public/panaverse-logo.png";

export default function Navbar() {
  const [dropDownState, setDropDownState] = useState(false);
  const handleDropDownState = () => setDropDownState(!dropDownState);

  useEffect(() => {
    const handleListener = (e: any) => {
      if (!e.target.matches(".dropbtn")) {
        console.log("testing1");
        setDropDownState(false);
      }
    };
    window.addEventListener("click", handleListener);

    return () => window.removeEventListener("click", handleListener);
  }, []);

  return (
    <nav className="flex w-full items-center justify-between">
      <Image src={logo} width={200} height={200} alt="Logo of Panaverse" />
      <ul className="flex gap-2">
        <li className="text-white text-xl font-medium">Home</li>
        <li className="text-white text-xl font-medium">About</li>
        <li className="text-white text-xl font-medium">
          <button
            id="dropdownDefaultButton"
            className="dropbtn text-white flex items-center text-xl font-medium  focus:outline-none "
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
            <ul className="bg-white text-gray-700 dark:bg-gray-700 dark:text-gray-200 absolute  right-14 z-10 w-44 divide-y divide-gray-100 rounded-lg py-2 text-sm shadow">
              <li>
                <span className="dark:hover:bg-gray-600 dark:hover:text-white block px-4 py-2 hover:bg-gray-100">
                  Dashboard
                </span>
              </li>
              <li>
                <span className="dark:hover:bg-gray-600 dark:hover:text-white block px-4 py-2 hover:bg-gray-100">
                  Settings
                </span>
              </li>
              <li>
                <span className="dark:hover:bg-gray-600 dark:hover:text-white block px-4 py-2 hover:bg-gray-100">
                  Earnings
                </span>
              </li>
              <li>
                <span className="dark:hover:bg-gray-600 dark:hover:text-white block px-4 py-2 hover:bg-gray-100">
                  Sign out
                </span>
              </li>
            </ul>
          ) : null}
        </li>
        <li className="text-white text-xl font-medium ">Contact</li>
      </ul>
    </nav>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../public/panaverse-logo.png";

export default function Navbar() {
  const [dropDownState, setDropDownState] = useState(false);

  const handleDropDownState = () => setDropDownState(!dropDownState);
  console.log(dropDownState);
  return (
    <nav className="flex w-full items-center justify-between">
      <Image src={logo} width={200} height={200} alt="Logo of Panaverse" />
      <ul className="flex gap-2">
        <li className="text-xl font-medium text-white  ">Home</li>
        <li className="text-xl font-medium text-white  ">About</li>
        <li className="text-xl font-medium text-white   ">
          <button
            id="dropdownDefaultButton"
            className="flex  items-center text-xl font-medium text-white  focus:outline-none "
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
            <ul className="z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white py-2 text-sm text-gray-700 shadow dark:bg-gray-700 dark:text-gray-200">
              <li>
                <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Dashboard
                </span>
              </li>
              <li>
                <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Settings
                </span>
              </li>
              <li>
                <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Earnings
                </span>
              </li>
              <li>
                <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  Sign out
                </span>
              </li>
            </ul>
          ) : null}
        </li>
        <li className="text-xl font-medium text-white ">Contact</li>
      </ul>
    </nav>
  );
}

"use client";
// import Image from "next/image";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useState } from "react";
import ContextProvider from "../context/context";
// import { useContext } from "react";
// import { GlobalContext } from "../context/context";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  // const { state } = useContext(GlobalContext);

  // console.log("state", state.darkTheme);
  return (
    // <ContextProvider>
    <div className={`${darkTheme ? "dark" : ""} `}>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <div
        className="h-screen"
        // style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="absolute -z-10 w-screen">
          <Image
            className="m-0"
            src="/hero.png"
            // layout="fill"
            // objectFit="cover"
            quality={100}
            width={1440}
            height={780}
            alt="hero banner panaverse"
          />
        </div>
        <div>
          <div className="d"></div>
          <div className="d"></div>
        </div>
      </div>
      <div className="h-screen bg-white dark:bg-bk">uhuhuh</div>
    </div>
    // </ContextProvider>
  );
}

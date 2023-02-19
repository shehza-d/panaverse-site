"use client";
// import Image from "next/image";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
// import ContextProvider from "../context/context";
import HeroSection from "@/components/home/HeroSection";
import Section2 from "@/components/home/section2";
// import { useContext } from "react";
// import { GlobalContext } from "../context/context";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  // const { state } = useContext(GlobalContext);

  // useEffect(() => {
  //   const darkModePreference = JSON.parse(localStorage.getItem("darkTheme"));
  //   setDarkTheme(darkModePreference);
  // }, []);
  // useEffect(
  //   () => localStorage.setItem("darkTheme", `${darkTheme}`),
  //   [darkTheme]
  // );

  return (
    // <ContextProvider>
    <main className={`${darkTheme ? "dark" : ""} `}>
      <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <HeroSection />
      <Section2 />
      {/* <div className="h-screen bg-white dark:bg-bk">uhuhuh</div> */}
    </main>
    // </ContextProvider>
  );
}

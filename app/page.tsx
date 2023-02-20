"use client";
// import Image from "next/image";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
// import ContextProvider from "../context/context";
import HeroSection from "@/components/home/HeroSection";
import Section2 from "@/components/home/section2";
// import { useContext } from "react";
// import { GlobalContext } from "../context/context";
import { motion, useScroll, useMotionValue } from "framer-motion";

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
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* // <ContextProvider> */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-3  bg-accent"
        style={{ scaleX: scrollYProgress }}
      />
      <main className={`${darkTheme ? "dark" : ""} `}>
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <HeroSection />
        <Section2 />
        {/* <div className="h-screen bg-white dark:bg-bk">uhuhuh</div> */}
      </main>
      {/* // </ContextProvider> */}
    </>
  );
}

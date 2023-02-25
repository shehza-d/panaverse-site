"use client";
// import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
// import ContextProvider from "../context/context";
import HeroSection from "@/components/home/HeroSection";
import ProgramInNutshell from "@/components/home/ProgramInNutshell";
// import { useContext } from "react";
// import { GlobalContext } from "../context/context";
import { motion, useScroll, useMotionValue } from "framer-motion";
import WhyToJoin from "@/components/home/WhyToJoin";
import StudentFeedback from "@/components/home/StudentFeedback";
import OurPartners from "@/components/home/OurPartners";
import OperationalCities from "@/components/home/OperationalCities";
import Footer from "@/components/Footer";
// import TwNav from "../components/tailwind/nav";

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
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-40 h-3  bg-accent"
        style={{ scaleX: scrollYProgress }}
      />
      <main
        className={`${darkTheme ? "dark" : ""} bg-fixed`}
        style={{ backgroundImage: "url('/home/attachmentFixed.png')" }}
      >
        {/* <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} /> */}
        {/* <TwNav /> */}
        <HeroSection />
        <ProgramInNutshell />
        <WhyToJoin />
        {/* <StudentFeedback /> */}
        {/* <OurPartners /> */}
        {/* <OperationalCities /> */}
        <Footer />
      </main>
      {/* // </ContextProvider> */}
    </>
  );
}

"use client";
import { useState } from "react";
// import ContextProvider from "../context/context";
// import { GlobalContext } from "../context/context";
import { motion, useScroll } from "framer-motion";
import {
  Footer,
  Navbar,
  WhyToJoin,
  StudentFeedback,
  OurPartners,
  OperationalCities,
  HeroSection,
  ProgramInNutshell,
} from "@/components";

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
        className={`${
          darkTheme ? "dark" : ""
        } bg-cover bg-fixed bg-center bg-no-repeat`}
        style={{ backgroundImage: "url('/home/attachmentFixed.png')" }}
      >
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        {/* <TwNav /> */}
        <HeroSection />
        <ProgramInNutshell />
        <WhyToJoin />
        <StudentFeedback />
        <OurPartners />
        <OperationalCities />
        {/* <Footer /> */}
      </main>
      {/* // </ContextProvider> */}
    </>
  );
}

"use client";
// import Image from "next/image";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useState } from "react";
import ContextProvider from "../context/context";
import { useContext } from "react";
import { GlobalContext } from "../context/context";

export default function Home() {
  const [darkTheme, setDarkTheme] = useState(true);
  const { state } = useContext(GlobalContext);

  return (
    <ContextProvider>
      <div className={`${state.darkTheme ? "dark" : "ss"}`}>
        <Navbar />
        <div
          className="h-screen"
          // style={{ backgroundImage: "url('/hero.png')" }}
        >
          <div className="absolute -z-10 w-screen">
            <Image
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
        <div className="h-screen">uhuhuh</div>

        <div className="">dfdfjdfkdfdfuhuhuh</div>
      </div>
    </ContextProvider>
  );
}

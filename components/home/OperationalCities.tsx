import Image from "next/image";
import karachi from "../../public/home/cities/karachi4.jpg";
import lahore from "../../public/home/cities/lahore.png";
import peshawar from "../../public/home/cities/peshawar.png";
import isd from "../../public/home/cities/islamabad.png";

// import { useState } from "react";

export default function OperationalCities() {
  // const [first, setFirst] = useState("")
  console.log("sheh");

  return (
    <section className="my-10 flex min-h-[300px] items-center justify-center overflow-x-scroll bg-white px-2 py-14  dark:bg-bk">
      <h3 className="gradient w-[300px] text-center text-4xl font-bold sm:text-5xl">
        Operational Cities
      </h3>
      {/* <div className=" right-0 h-52 w-52 rounded-lg bg-[rgba(55,216,43,0.3)] blur-3xl"></div> */}
      {/* <div
        className="h-52 w-52 "
        style={{ backgroundImage: "url('/theme-gradient.png')" }}
      ></div> */}

      <Image
        className="mr-2 h-[303px] rounded-2xl"
        src={karachi}
        width={200}
        height={300}
        alt="karachi"
      />
      <Image className="h-[320px]" src={isd} alt="islamabad city" />
      <Image className="h-[320px]" src={lahore} alt="lahore" />
      <Image className="h-[320px]" src={lahore} alt="lahore" />
      <Image className="h-[320px]" src={peshawar} alt="peshawar" />

      <div className="flex h-[300px] w-[200px] items-center rounded-2xl border-4 border-accent bg-[#2e2e3f]">
        <h4 className="text-center text-2xl font-semibold  text-gray-200">
          Coming soon to your city!
        </h4>
      </div>
    </section>
  );
}

// bg-[rgba(99,76,205,0.3)]
// "bg-[rgba(212,106,141,0.3)]"

// import Image from "next/image";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
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
      <div className="bg-black text-white dark:text-red-600">
        dfdfjdfkdfdfuhuhuh
      </div>
      <div className="">dfdfjdfkdfdfuhuhuh</div>
    </>
  );
}

import Image from "next/image";

export default function HeroSection() {
  return (
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
      <div className="flex h-full items-center justify-center">
        <div className="w-1/2 border-4 border-red-500">
          <h1 className="text-5xl font-black text-wt">
            Become <span className="text-accent">Certified Web 3.0</span> and
            <span className="text-accent">Metaverse Developer</span>
          </h1>
          <h3 className="text-2xl font-normal text-gray-50">
            Launch Your Dev Career With Web 3 and Metaverse Getting Ready for
            the Next Generation of the Internet
          </h3>
          <button className="rounded-md bg-accent  py-2 px-4 text-gray-900 transition-all duration-300 hover:bg-accent hover:bg-opacity-90 dark:text-gray-100">
            Apply Now
          </button>
        </div>
        <Image
          className="w-1/2 "
          src="/main/hero-cartoon.png"
          alt="hero section cartoon"
          width={528}
          height={541}
        />
      </div>
    </div>
  );
}

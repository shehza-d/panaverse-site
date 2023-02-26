import Image from "next/image";
import Link from "next/link";
import heroCartoon from "../../public/home/hero-cartoon.png";
export default function HeroSection() {
  return (
    <header
      style={{ backgroundImage: "url('/home/hero.png')" }}
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="flex min-h-full flex-col items-center justify-center px-6 pt-32 md:flex-row">
        <div className="min-w-[300px] max-w-[500px]">
          <h1 className="text-4xl font-black text-wt md:text-5xl">
            Become{" "}
            <span className="inline-block bg-gradient-to-r from-blue-300 via-green-500 to-accent bg-clip-text text-transparent">
              Certified Web 3.0
            </span>{" "}
            and{" "}
            <span className="inline-block  bg-gradient-to-r from-accent via-green-500 to-blue-300 bg-clip-text text-transparent">
              Metaverse Developer
            </span>
          </h1>
          <h3 className="my-8 text-xl font-normal text-gray-50 md:text-2xl">
            Launch Your Dev Career With Web 3 and Metaverse Getting Ready for
            the Next Generation of the Internet
          </h3>
          <button>
            <Link
              className="rounded-md bg-gradient-to-r from-accent  to-green-500 py-2 px-4 text-gray-900 transition-all duration-500  hover:py-3 hover:px-5 dark:text-gray-100"
              href="https://portal.piaic.org/"
            >
              Join Now
            </Link>
          </button>
        </div>
        {/* <div
          // style={{ backgroundImage: "url('/home/hero-cartoon.png')" }}
          className="h-[70%]  w-[45%]  bg-contain bg-center bg-no-repeat"
        ></div> */}
        <Image
          className="h-[420px] w-[420px] lg:h-[620px] lg:w-[620px] xl:h-[720px] xl:w-[720px]"
          src={heroCartoon}
          alt="hero section cartoon"
          width={528}
          height={541}
        />
      </div>
    </header>
  );
}

{
  /* <div className="border-6 absolute -z-10 w-screen border-blue-400">
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
      </div> */
}

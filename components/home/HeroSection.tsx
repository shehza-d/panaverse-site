import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <header
      style={{ backgroundImage: "url('/hero.png')" }}
      className="h-screen bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="flex h-full flex-wrap items-center justify-center">
        <div className="w-2/5">
          <h1 className="text-5xl font-black text-wt">
            Become{" "}
            <span className="inline-block bg-gradient-to-r from-blue-300 via-green-500 to-accent bg-clip-text text-transparent">
              Certified Web 3.0
            </span>{" "}
            and{" "}
            <span className="inline-block  bg-gradient-to-r from-accent via-green-500 to-blue-300 bg-clip-text text-transparent">
              Metaverse Developer
            </span>
          </h1>
          <h3 className="my-8 text-2xl  font-normal text-gray-50">
            Launch Your Dev Career With Web 3 and Metaverse Getting Ready for
            the Next Generation of the Internet
          </h3>
          <button>
            <Link
              className="rounded-md bg-gradient-to-r from-accent  to-green-500 py-2 px-4 text-gray-900 transition-all duration-300 hover:bg-accent hover:bg-opacity-90 dark:text-gray-100"
              href="https://portal.piaic.org/"
            >
              Apply Now
            </Link>
          </button>
        </div>
        <div
          style={{ backgroundImage: "url('/home/hero-cartoon.png')" }}
          className="h-[70%]  w-[45%]  bg-contain bg-center bg-no-repeat"
        ></div>
        {/* <Image
          className="w-1/2 "
          src="/main/hero-cartoon.png"
          alt="hero section cartoon"
          width={528}
          height={541}
        /> */}
      </div>
    </header>
  );
}

// background: hsla(168, 82%, 37%, 1);
// background: linear-gradient(90deg, hsla(168, 82%, 37%, 1) 47%, hsla(234, 93%, 67%, 1) 100%);
// background: -moz-linear-gradient(90deg, hsla(168, 82%, 37%, 1) 47%, hsla(234, 93%, 67%, 1) 100%);
// background: -webkit-linear-gradient(90deg, hsla(168, 82%, 37%, 1) 47%, hsla(234, 93%, 67%, 1) 100%);
// filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#11AD8E", endColorstr="#5B6CF9", GradientType=1 );

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
      </div> */ 5;
}

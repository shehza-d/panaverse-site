import Image from "next/image";
import img from "../../public/home/section2.png";

export default function Section2() {
  return (
    <section className=" flex  h-screen items-center bg-white transition-all  duration-300  dark:bg-bk ">
      <Image
        className=" z-20  h-56  sm:h-56 sm:w-56 md:h-[630px]"
        src={img}
        // src="/home/section2.png"
        quality={100}
        // width={644}
        // height={629}
        alt="section 2 cartoon panaverse"
      />
      <div className=" relative right-4 top-32 z-10  w-7/12 rounded-3xl bg-[#2e2e3f] p-10">
        <h4 className="gradient text-center text-4xl font-bold text-accent">
          The Program in a Nutshell
        </h4>
        <h2 className="gradient py-8 text-center text-3xl font-bold text-accent">
          Earn While You Learn
        </h2>
        <p className="pl-16 text-justify text-2xl font-normal text-slate-50">
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program&apos;s beginning. It resembles a
          cross between a corporate venture and an educational project.
        </p>
      </div>
    </section>
  );
}

{
  /* <h1 className="text-gray-200 sm:text-red-500 md:text-green-500 lg:text-blue-500 xl:text-pink-400 2xl:text-yellow-500">
fdffkdjfdjfdfj
</h1> */
}
//  // "linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4);",

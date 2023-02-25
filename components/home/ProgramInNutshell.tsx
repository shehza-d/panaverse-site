import Image from "next/image";
import img from "../../public/home/section2.png";

export default function ProgramInNutshell() {
  return (
    <section className="flex min-h-screen flex-wrap items-center justify-center bg-white dark:bg-bk lg:flex-nowrap">
      <Image
        className="z-20 h-[420px] w-[420px] lg:h-[520px] lg:w-[520px] xl:h-[620px] xl:w-[620px]"
        src={img}
        quality={100}
        width={644}
        height={629}
        alt="section 2 cartoon panaverse"
      />
      <div className="right-28 bottom-10 z-10 m-6 min-w-[300px] max-w-[800px] rounded-3xl bg-[#2e2e3f] p-10 lg:relative">
        <h4 className="gradient text-center text-3xl font-bold text-accent sm:text-4xl">
          The Program in a Nutshell
        </h4>
        <h2 className="gradient py-8 text-center text-2xl font-bold text-accent sm:text-3xl">
          Earn While You Learn
        </h2>
        <p className="text-justify text-xl font-normal text-slate-50 sm:text-2xl">
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program&apos;s beginning. It resembles a
          cross between a corporate venture and an educational project.
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Section2() {
  return (
    <section className="bg-white dark:bg-bk ">
      <Image
        src="/home/section2.png"
        quality={100}
        width={644}
        height={629}
        alt="section 2 cartoon panaverse"
      />
      <div
        className="h-96 w-5/12 rounded-2xl bg-[#353536] p-10"
        //   f  // "linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), rgba(18, 18, 18, 0.4);",
      >
        <h4 className="text-center text-4xl  font-bold text-accent">
          The Program in a Nutshell
        </h4>
        <h2 className="py-10 text-center text-3xl font-bold text-accent">
          Earn While You Learn
        </h2>
        <p className="text-justify text-xl font-normal text-slate-50">
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program&apos;s beginning. It resembles a
          cross between a corporate venture and an educational project.
        </p>
      </div>
    </section>
  );
}

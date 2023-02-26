import Image from "next/image";
import model from "../../public/home/model.png";
import me from "../../public/home/shehzad.jpg";

export default function StudentFeedback() {
  return (
    <section className="flex min-h-screen flex-col justify-between px-5  sm:px-10  md:px-14 lg:px-20">
      <h2 className="mt-20 text-3xl font-bold text-gray-100 md:text-5xl">
        StudentFeedback
      </h2>

      <div className="relative top-24 min-w-[300px] max-w-[800px]  rounded-3xl border-4 border-accent bg-[#2e2e3f] p-10">
        <div className="flex justify-between ">
          <div className="flex items-center gap-6">
            <Image
              className="h-24 w-24 rounded-full"
              src={me}
              alt="student photo"
            />
            <div className="f">
              <h4 className="gradient text-2xl font-bold text-accent underline sm:text-3xl ">
                Shehzad Iqbal
              </h4>
              <h6 className="text-lg font-medium text-accent sm:text-xl">
                Web 3 Developer
              </h6>
            </div>
          </div>

          <Image
            className="relative bottom-2 left-4"
            src="/home/comma1.svg"
            alt="student photo"
            width={44}
            height={31}
          />
        </div>

        <p className="text-justify text-base font-normal text-slate-50 sm:text-lg lg:pl-16">
          It&lsquo;s to address and expresses gratitude for their dedication to
          teaching and providing a valuable learning experience. The student
          appreciates the supportive and inclusive classroom environment and
          commends the teachers for their availability and willingness to help
          outside of class. The student also thanks the professor/teacher for
          being flexible and understanding during challenging times. Overall,
          the feedback is positive and appreciative of the teacher&lsquo;s
          efforts.
        </p>

        <Image
          className=""
          src="/home/comma2.svg"
          alt="student photo"
          width={44}
          height={31}
        />
        {/* <span className="text-9xl text-accent"> &ldquo; &rdquo;</span> */}
      </div>
      <Image className="z-10 self-end" src={model} alt="model" />
    </section>
  );
}

import Image from "next/image";
import model from "../../public/home/model.png";
import me from "../../public/home/shehzad.jpg";

export default function StudentFeedback() {
  return (
    <section className="flex  h-screen flex-col justify-evenly transition-all duration-300  ">
      <h2 className="text-5xl font-bold text-gray-100">StudentFeedback</h2>

      <div className=" w-6/12 rounded-3xl border-4 border-accent bg-[#2e2e3f] p-10">
        <div className="flex justify-between border-2 border-red-300">
          <div className="flex items-center gap-6">
            <Image
              className="h-24 w-24 rounded-full"
              src={me}
              alt="student photo"
            />
            <div className="f">
              <h4 className="gradient text-3xl font-bold text-accent underline ">
                Shehzad Iqbal
              </h4>
              <h6 className=" text-xl font-medium text-accent">
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

        <p className="pl-16 text-justify  text-lg font-normal text-slate-50">
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
          className="relative "
          src="/home/comma2.svg"
          alt="student photo"
          width={44}
          height={31}
        />
        {/* <span className="text-9xl text-accent"> &ldquo; &rdquo;</span> */}
      </div>
      <Image className="relative right-8" src={model} alt="model" />
    </section>
  );
}

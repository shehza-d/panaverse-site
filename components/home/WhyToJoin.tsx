import Image from "next/image";
import img1 from "../../public/home/why-to-join-1.png";
import img2 from "../../public/home/why-to-join-2.png";
import img3 from "../../public/home/why-to-join-3.png";
import img4 from "../../public/home/why-to-join-4.png";

export default function WhyToJoin() {
  return (
    <section className=" flex flex-col items-center justify-evenly  bg-white px-8 py-8 transition-all duration-300  dark:bg-bk sm:px-14  md:h-[120vh]   ">
      <h2 className="gradient text-4xl font-bold sm:text-5xl">Why to Join</h2>
      <div className="md:w-[70%] lg:w-[60%]">
        <p className="py-4 text-justify  text-gray-800 transition-all duration-300 dark:text-gray-300 sm:text-lg">
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program&apos;s beginning. It resembles a
          cross between a corporate venture and an educational project.
        </p>
      </div>

      <div className=" flex flex-wrap gap-2 ">
        <div className="flex h-72 min-w-[200px] flex-1 flex-col items-center justify-evenly rounded-2xl  border-4 border-accent bg-[#2e2e3f] px-2  md:h-96 ">
          <h3 className=" text-center  text-2xl font-semibold  text-gray-200">
            Product Owners
          </h3>
          <Image
            width={161}
            // height={161}
            src={img1}
            alt="Product Owners"
          />
        </div>
        <div className="flex h-72 min-w-[200px] flex-1 flex-col items-center justify-evenly rounded-2xl  border-4 border-accent bg-[#2e2e3f] px-2  md:h-96 ">
          <h3 className=" text-center  text-2xl font-semibold  text-gray-200">
            Freelance Freedom
          </h3>
          <Image width={161} height={161} src={img2} alt="Freelance Freedom" />
        </div>
        <div className="flex h-72 min-w-[200px] flex-1 flex-col items-center justify-evenly rounded-2xl  border-4 border-accent bg-[#2e2e3f] px-2  md:h-96 ">
          <h3 className=" text-center  text-2xl font-semibold  text-gray-200">
            Access to Global Market by DAO
          </h3>
          <Image
            width={161}
            height={161}
            src={img3}
            alt="Access to Global Market by DAO"
          />
        </div>
        <div className="flex h-72 min-w-[200px] flex-1 flex-col items-center justify-evenly rounded-2xl  border-4 border-accent bg-[#2e2e3f] px-2  md:h-96 ">
          <h3 className=" text-center  text-2xl font-semibold  text-gray-200">
            Boost Economy
          </h3>
          <Image width={161} height={161} src={img4} alt="Boost Economy" />
        </div>
      </div>
    </section>
  );
}

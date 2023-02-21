import Image from "next/image";
import Marquee from "react-fast-marquee";
import partner1 from "../../public/home/partners/air-uni.png";
import partner2 from "../../public/home/partners/bahria.png";
import partner3 from "../../public/home/partners/cecos.png";
import partner4 from "../../public/home/partners/panacloud.svg";
import partner5 from "../../public/home/partners/piaic.svg";
import partner6 from "../../public/home/partners/psx.png";
import partner7 from "../../public/home/partners/saylani.png";

// import partner8 from "../../public/home/partners/panacloud.svg";

export default function OurPartners() {
  return (
    <section className="flex h-[60vh]  flex-col justify-evenly  bg-white  dark:bg-bk ">
      <h3 className="gradient text-center text-4xl font-bold sm:text-5xl">
        OurPartners
      </h3>

      <div className="md">
        <Marquee
          className="dark:bg-emerald-100"
          pauseOnClick
          speed={30}
          gradient={true}
          gradientColor={[17, 173, 142]}
          gradientWidth={200}
        >
          <Image src={partner1} width={150} height={150} alt="partner1" />
          <Image src={partner7} width={200} height={250} alt="saylani" />
          <Image src={partner5} width={150} height={80} alt="piaic" />
          <Image src={partner2} width={150} height={150} alt="partner1" />
          <Image src={partner4} width={200} height={200} alt="panacloud" />
          <Image src={partner3} width={150} height={150} alt="partner1" />
          <Image src={partner5} width={150} height={80} alt="piaic" />
          <Image src={partner4} width={200} height={200} alt="panacloud" />
          <Image src={partner7} width={200} height={250} alt="saylani" />
          <Image src={partner6} width={150} height={150} alt="partner1" />
        </Marquee>
      </div>
    </section>
  );
}

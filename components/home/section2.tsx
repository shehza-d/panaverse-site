import Image from "next/image";

export default function Section2() {
  return (
    <section>
      <Image
        src="/home/section2.png"
        quality={100}
        width={644}
        height={629}
        alt="section 2 cartoon panaverse"
      />
      <div className="f">
        <h4>The Program in a Nutshell</h4>
        <h2>Earn While You Learn</h2>
        <p>
          In this brand-new type of curriculum, students will learn how to make
          money and boost exports in the classroom and will begin doing so
          within six months of the program&apos;s beginning. It resembles a
          cross between a corporate venture and an educational project.
        </p>
      </div>
    </section>
  );
}

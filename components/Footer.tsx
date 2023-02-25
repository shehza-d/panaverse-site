import Image from "next/image";
import logo from "../public/panaverse-logo.png";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { AiFillCopyrightCircle } from "react-icons/ai";
import {
  FaGithubSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer
      className="flex min-h-[28rem] flex-col justify-end pt-3"
      style={{
        backgroundImage: "url('/home/footer.png')",
      }}
    >
      <div className="mx-10 flex flex-wrap md:mx-20">
        <div className="min-w-[20rem] flex-1">
          <Image src={logo} alt="logo of Panaverse" />
          <Link
            href="https://goo.gl/maps/UPXtpSiJ5NH2"
            target="_blank"
            className=" flex items-center p-1 text-gray-100 hover:text-accent"
          >
            <FiMapPin className="mr-2 text-xl text-accent" />
            Plot 245/2 M, PECHS Block 6, Karachi
          </Link>
          <Link
            href="https://wa.me/923082220203"
            target="_blank"
            className="flex items-center p-1 text-slate-100 hover:text-accent"
          >
            <FaWhatsapp className="mr-2 text-xl text-accent" />
            +92 308 2220203
          </Link>
          <Link
            href="mailto:education@piaic.org"
            target="_blank"
            className="flex items-center p-1 text-slate-100 hover:text-accent"
          >
            <MdOutlineMail className="mr-2 text-xl text-accent" />
            education@piaic.org
          </Link>

          <h6 className="my-2 text-2xl font-semibold text-accent">
            Follow us on
          </h6>
          <div className="icons flex justify-evenly text-3xl text-accent">
            <Link href="https://twitter.com/Panaverse_edu">
              <FaTwitterSquare />
            </Link>
            <Link href="https://www.facebook.com/piaic">
              <FaFacebookSquare />
            </Link>
            <Link href="https://www.youtube.com/@panaverse/streams">
              <FaYoutubeSquare />
            </Link>
            <Link href="https://github.com/panaverse">
              <FaGithubSquare />
            </Link>
            <Link href="https://www.linkedin.com/company/panaverse/">
              <FaLinkedin />
            </Link>
          </div>
        </div>
        {/* <h6 className="my-2 text-2xl font-semibold text-accent">Courses</h6> */}
        <ul className="min-w-[20rem] flex-1 cursor-pointer divide-y divide-gray-50 px-2 py-2 text-sm text-black shadow dark:divide-slate-600 dark:text-gray-200 md:text-base">
          <li>
            <span className="block px-4 py-2 hover:text-accent">
              Web 3.0 and Metaverse
            </span>
          </li>
          <li>
            <span className="block px-4 py-2 hover:text-accent">
              Artificial Intelligence (AI) and Deep Learning
            </span>
          </li>
          <li>
            <span className="block px-4 py-2 hover:text-accent">
              Cloud-Native Computing
            </span>
          </li>
          <li>
            <span className="block px-4 py-2 hover:text-accent">
              Ambient Computing and IoT
            </span>
          </li>
          <li>
            <span className="block px-4 py-2 hover:text-accent">
              Genomics and Bioinformatics
            </span>
          </li>
          <li>
            <span className="block px-4 py-2 hover:text-accent">
              Network Programmability and Automation
            </span>
          </li>
        </ul>
        <form className="flex min-w-[20rem] flex-1 flex-col justify-evenly p-8 text-accent  lg:p-1">
          <label className="text-2xl font-semibold" htmlFor="newsLetter">
            Subscribe
          </label>
          <input
            className="my-6 min-w-0 rounded-lg border-0 bg-white/5 px-3.5 py-4 text-white shadow-sm outline-none ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
            type="email"
            name="newsLetter"
            autoComplete="email"
            required
            placeholder="Your Email here"
          />
          <button
            className="w-fit rounded-md bg-accent py-2 px-6 font-semibold text-slate-100 shadow-xl hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="flex h-24 items-center justify-center text-accent">
        <Link
          href="https://github.com/shehza-d/panaverse-site"
          className="flex items-center justify-center p-2"
        >
          <AiFillCopyrightCircle /> &nbsp;&nbsp; 2023 Panaverse DAO. All rights
          by reserved SHEHZAD.
        </Link>
      </div>
    </footer>
  );
}

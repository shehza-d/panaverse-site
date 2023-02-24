import Image from "next/image";
import logo from "../public/panaverse-logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { AiFillCopyrightCircle } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="h-[28rem]"
      style={{
        backgroundImage: "url('/home/footer.png')",
      }}
    >
      <div className="footer-container flex">
        <div className="bdr flex-1">
          <Image src={logo} alt="logo of Panaverse" />

          <Link
            href="https://www.google.com"
            className="flex  items-center p-1 text-gray-100"
          >
            <FiMapPin className="text-accent" /> &nbsp; Plot 245/2 M, PECHS
            Block 6, Karachi
          </Link>
          <Link
            href="https://www.google.com"
            className="flex  items-center p-1 text-slate-100"
          >
            <FaWhatsapp className="text-accent" /> &nbsp; +92 308 2220203
          </Link>

          {/* <div className="flex">
          0 <a href="https://www.google.com">0308-2220203</a>
        </div> */}
        </div>
        <div className="hidden flex-1 justify-center border-2  border-green-500 sm:flex">
          <ul className="w-96 cursor-pointer divide-y divide-gray-50 px-2 py-2 text-sm text-black shadow dark:divide-slate-600 dark:text-gray-200">
            <li>
              <span className=" block px-4 py-2  hover:text-accent">
                Web 3.0 and Metaverse
              </span>
            </li>
            <li>
              <span className="block  px-4 py-2 hover:text-accent">
                Artificial Intelligence (AI) and Deep Learning
              </span>
            </li>
            <li>
              <span className="block  px-4 py-2 hover:text-accent">
                Cloud-Native Computing
              </span>
            </li>
            <li>
              <span className="block  px-4 py-2 hover:text-accent">
                Ambient Computing and IoT
              </span>
            </li>
            <li>
              <span className="block  px-4 py-2 hover:text-accent">
                Genomics and Bioinformatics
              </span>
            </li>
            <li>
              <span className="block  px-4 py-2 hover:text-accent">
                Network Programmability and Automation
              </span>
            </li>
          </ul>
        </div>
        {/* <div className="flex-1 border-2 border-blue-500"></div> */}
        <form className="items-cr  flex-1 flex-col justify-evenly border-2  border-yellow-500 text-accent">
          <label htmlFor="newsLetter">Subscribe</label>
          <input
            className="min-w-0 flex-auto rounded-lg border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm outline-none ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
            type="email"
            name="newsLetter"
            autoComplete="email"
            required
            placeholder="Your Email here"
          />
          <button
            className="rounded-md bg-accent py-2 px-6 font-semibold text-slate-100 shadow-xl hover:opacity-80  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="flex h-24 items-center justify-center border-2 border-accent text-accent">
        <Link
          href="https://github.com/shehza-d/panaverse-site"
          className="flex items-center justify-center p-2"
        >
          <AiFillCopyrightCircle /> &nbsp;&nbsp; 2023 Panaverse Dao. All rights
          reserved.
        </Link>
      </div>
    </footer>
  );
}

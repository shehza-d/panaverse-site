import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full bg-gray p-5">
      <nav className="flex justify-between items-center w-1200px m-auto">
        <h1 className="text-lg font-bold">Panaverse</h1>
        <ul className="flex gap-2">
          <li className="pt-3 pb-3 pl-5 pr-5 hover:bg-gray-100">Home</li>
          <li className="pt-3 pb-3 pl-5 pr-5 hover:bg-gray-100">About</li>
          <li className="pt-3 pb-3 pl-5 pr-5 hover:bg-gray-100">Contact</li>
          <li className="pt-3 pb-3 pl-5 pr-5 hover:bg-gray-100">Testimonal</li>
        </ul>
      </nav>
    </div>
  );
}

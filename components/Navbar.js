import { ViewListIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div
      className={`md:bg-white z-40 mb-2 ${
        navOpen
          ? "bg-black/70 md:h-20 h-screen z-40 fixed w-full md:sticky"
          : "bg-white sticky top-0"
      }`}
    >
      <nav className="flex items-center justify-between md:justify-around p-2 shadow-lg z-30">
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={60}
              height={60}
              alt="/"
              objectFit="contain"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div onClick={() => setNavOpen(!navOpen)}>
          <ViewListIcon className="md:hidden h-8 hover:scale-110 ease-in duration-200 cursor-pointer" />
        </div>
        <div className="hidden md:inline-flex">
          <ul className="flex items-center space-x-6">
            <Link href="/">
              <li className="uppercase text-xl cursor-pointer hover:underline underline-offset-2">
                Home
              </li>
            </Link>

            <Link href="/">
              <li className="uppercase text-xl cursor-pointer hover:underline underline-offset-2">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="uppercase text-xl cursor-pointer hover:underline underline-offset-2">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="uppercase text-xl cursor-pointer hover:underline underline-offset-2">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </nav>

      <div
        className={`${
          navOpen ? "left-0" : "left-[-300%]"
        } fixed top-0 z-50 bg-gray-50 w-[70%] md:hidden h-screen rounded-md p-6 transition-all ease-in-out duration-500`}
      >
        <div className="flex items-center justify-between border-b border-b-gray-200 pb-4">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={60}
              height={60}
              alt="/"
              objectFit="contain"
              className="cursor-pointer"
            />
          </Link>
          <XIcon
            onClick={() => setNavOpen(false)}
            className="h-12 rounded-full shadow-lg bg-white hover:shadow-xl p-2 text-gray-600 cursor-pointer transition-all ease-in-out hover:scale-110 duration-200"
          />
        </div>
        <ul className="flex flex-col space-y-8 mt-8 mb-8">
          <Link href="/">
            <li className="uppercase text-xl cursor-pointer hover:underline underline-offset-2">
              Home
            </li>
          </Link>

          <Link href="/">
            <li className="uppercase text-xl cursor-pointer hover:underline underline-offset-2">
              Skills
            </li>
          </Link>
          <Link href="/">
            <li className="uppercase text-xl cursor-pointer hover:underline underline-offset-2">
              Projects
            </li>
          </Link>
          <Link href="/">
            <li className="uppercase text-xl cursor-pointer hover:underline underline-offset-2">
              Contact
            </li>
          </Link>
        </ul>
        <div className="flex items-center justify-around mt-auto py-11">
          <div className="flex items-center justify-center text-center shadow-lg bg-gray-200 p-2 hover:shadow-xl cursor-pointer rounded-full hover:scale-110 transition-all ease-in-out duration-200">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
              alt="github"
              width={30}
              height={30}
            />
          </div>
          <div className="flex items-center justify-center text-center shadow-lg bg-gray-200 p-2 hover:shadow-xl cursor-pointer rounded-full hover:scale-110 transition-all ease-in-out duration-200">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/646/646094.png"
              alt="email"
              width={30}
              height={30}
            />
          </div>
          <div className="flex items-center justify-center text-center shadow-lg bg-gray-200 p-2 hover:shadow-xl cursor-pointer rounded-full hover:scale-110 transition-all ease-in-out duration-200">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/3097/3097126.png"
              alt="wuzzuf"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

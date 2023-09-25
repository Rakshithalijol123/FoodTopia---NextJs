"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-[#FFFFFF] top-0 mt-16 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/home">
                <h2><span className='text-2xl font-bold text-[#E23744]' >Food</span><span className='text-2xl font-bold text-black' >Topia</span></h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="/images/close.png" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="/images/menu.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-gray-600 py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#E23744]  border-[#E23744]  md:hover:text-[#E23744] md:hover:bg-transparent">
                  <Link href="/features" onClick={() => setNavbar(!navbar)}>
                    Features
                  </Link>
                </li>
                <li className="pb-6 text-xl text-gray-600 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#E23744]  border-[#E23744]  md:hover:text-[#E23744] md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                  About Us
                  </Link>
                </li>
                <li className="pb-6 text-xl text-gray-600 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#E23744]  border-[#E23744]  md:hover:text-[#E23744] md:hover:bg-transparent">
                  <Link href="/canteen" onClick={() => setNavbar(!navbar)}>
                  Canteen
                  </Link>
                </li>
                <li className="pb-6 text-xl text-gray-600 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#E23744]  border-[#E23744]  md:hover:text-[#E23744] md:hover:bg-transparent">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                  Contact Us
                  </Link>
                </li>
                <li className="pb-6 text-xl text-gray-600 py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#E23744]  border-[#E23744]  md:hover:text-[#E23744] md:hover:bg-transparent">
                  <Link href="/register" onClick={() => setNavbar(!navbar)}>
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
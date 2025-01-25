import Image from "next/image";
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import Navigation from "../Navigation";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex items-center justify-between w-full px-5">
        <div className="flex-1">
          <Image
            className="w-auto h-auto"
            src={"/logo.svg"}
            alt="tobams logo"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="hidden md:flex items-center gap-5">
          <button className="bg-primary flex gap-1 items-center p-2 border border-[#571244] rounded">
            <div className="bg-[#DDD0DA] p-1 rounded-full">
              <FaRegUser color="#571244" />
            </div>
            <span className="text-white">Account</span>
            <GoChevronDown color="#ffffff" />
          </button>
          <button className="text-white bg-[#EF4353] font-semibold leading-[27px] text-[18px] text-center p-2 rounded">
            Take Assessment
          </button>
        </div>
        <div>
          <Image
            className="w-auto h-auto md:hidden"
            src={"/hamburger.svg"}
            alt="menu btn"
            width={100}
            height={100}
            priority
          />
        </div>
      </header>
      <Navigation />
    </>
  );
};

export default Header;

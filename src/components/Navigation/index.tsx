import React from "react";
import { GoChevronDown } from "react-icons/go";

const Navigation = () => {
  return (
    <nav className="md:flex items-center gap-5 max-w-screen-lg p-3 mx-auto hidden">
      <div className="flex items-center gap-1">
        <p className="text-primary font-semibold text-[14px] leading-[27px] text-center">
          About
        </p>
        <GoChevronDown color="#571244" />
      </div>
      <div className="flex items-center gap-1">
        <p className="text-[#151515] font-semibold text-[14px] leading-[27px] text-center">
          What We Do
        </p>
        <GoChevronDown color="#151515" />
      </div>
      <div className="flex items-center gap-1">
        <p className="text-[#151515] font-semibold text-[14px] leading-[27px] text-center">
          Jobs
        </p>
        <GoChevronDown color="#151515" />
      </div>
      <div className="flex items-center gap-1">
        <p className="text-[#151515] font-semibold text-[14px] leading-[27px] text-center">
          Projects
        </p>
        {/* <GoChevronDown color='#151515'/> */}
      </div>
      <div className="flex items-center gap-1">
        <p className="text-[#151515] font-semibold text-[14px] leading-[27px] text-center">
          TG Academy
        </p>
        {/* <GoChevronDown color='#151515'/> */}
      </div>
      <div className="flex items-center gap-1">
        <p className="text-[#151515] font-semibold text-[14px] leading-[27px] text-center">
          Strategic Partnership
        </p>
        {/* <GoChevronDown color='#151515'/> */}
      </div>
      <div className="flex items-center gap-1">
        <p className="text-[#151515] font-semibold text-[14px] leading-[27px] text-center">
          Pricing
        </p>
        {/* <GoChevronDown color='#151515'/> */}
      </div>
      <div className="flex items-center gap-1">
        <p className="text-[#151515] font-semibold text-[14px] leading-[27px] text-center">
          Booking a Consultation
        </p>
        {/* <GoChevronDown color='#151515'/> */}
      </div>
    </nav>
  );
};

export default Navigation;

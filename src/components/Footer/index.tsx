import Image from "next/image";
import React from "react";
import { IoMail } from "react-icons/io5";
import { MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#11040E] md:px-16 px-5 py-5 w-full">
      <div className="space-y-5 md:space-x-3 md:gap-20 md:flex">
        <div className="flex-1">
          <Image
            className="w-auto h-auto"
            src={"/logo.svg"}
            alt="tobams logo"
            width={100}
            height={100}
            priority
          />
          <p className="text-[14px] font-normal leading-[21px] text-[#F8F8F8] my-5">
            Tobams Group is an innovative consultancy firm reshaping the future
            of tech talent development in Africa, specializing in talent
            acquisition, internships, and skill development with a global
            perspective.
          </p>
          <div className="flex items-center gap-2 my-3">
            <Image
              src={"/linkedin.svg"}
              alt="linkedin"
              width={30}
              height={30}
              priority
            />
            <Image
              src={"/instagram.svg"}
              alt="instagram"
              width={30}
              height={30}
              priority
            />
            <Image src={"/x.svg"} alt="x" width={30} height={30} priority />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[18px] leading-[27px] text-white my-3">
            What We Do
          </h3>
          <ul className="text-[14px] font-normal leading-[21px] text-white space-y-3">
            <li>Sustainability Services</li>
            <li>Strategy Planning and Implementation</li>
            <li>Tech Talent Solutions</li>
            <li>Training and Development</li>
            <li>IT Consulting Services</li>
            <li>Social Impact</li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[18px] leading-[27px] text-white my-3">
            Company
          </h3>
          <ul className="text-[14px] font-normal leading-[21px] text-white space-y-3">
            <li>About</li>
            <li>Jobs</li>
            <li>projects</li>
            <li>Our Founder</li>
            <li>Business Model</li>
            <li>The Team</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-[18px] leading-[27px] text-white my-3">
            Solution
          </h3>
          <ul className="text-[14px] font-normal leading-[21px] text-white space-y-3">
            <li>Tobams Group Academy</li>
            <li>Help a Tech Talent</li>
            <li>Campus Ambassadors Program</li>
            <li>Join Our Platform</li>
            <li>Pricing</li>
            <li>Book a Consultation</li>
            <li>Join Our Slack Community</li>
          </ul>
        </div>
      </div>

      <div className="my-5 pb-5 border-b border-[#DDD0DA] md:flex gap-10 md:flex-row-reverse md:items-center md:justify-center">
        <div>
          <h3 className="text-white font-bold leading-[27px] text-[18px] my-3">
            Contact Information
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <IoMail size={25} color="#EF4353" />
              <span className="text-white text-[14px] font-normal leading-[21px]">
                theteam@tobamsgroup.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MdPhone size={25} color="#EF4353" />
              <span className="text-white text-[14px] font-normal leading-[21px]">
                +447886600748
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold leading-[27px] text-[18px] my-3">
            Registered Offices
          </h3>
          <div className="md:flex md:items-center md:justify-center gap-10">
            <div>
              <h3 className="text-[#EF4353] font-semibold text-[16px] my-3 leading-[21px]">
                United Kingdom
              </h3>
              <p className="text-white font-normal leading-[21px]">
                07451196 (Registered by Company House)Vine Cottages, 215 North
                Street, Romford, Essex, United Kingdom, RM1 4QA
              </p>
            </div>
            <div>
              <h3 className="text-[#EF4353] font-semibold text-[16px] my-3 leading-[21px]">
                Nigeria
              </h3>
              <p className="text-white font-normal leading-[21px]">
                RC 1048722 (Registered by the Corporate Affairs Commission)4,
                Muaz Close, Angwari-Rimi{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:flex flex-row-reverse md:items-center md:justify-between">
        <div className="w-[327px]">
          <ul className="underline text-white flex flex-wrap justify-between gap-5 items-center w-full text-[14px] leading-[36px] text-center md:flex-nowrap text-nowrap">
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <p className="text-white leading-[24px] text-center text-[14px] font-[300] px-5">
          Copyright ⓒ Tobams Group, 2024. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

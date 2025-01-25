import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#5712441A] w-[90%] p-7 rounded-lg mx-auto my-5">
      <h3 className="text-[#151515] font-bold text-[16px] leading-[21px] tracking-wide my-5">
        Sign Up for Our Newsletters
      </h3>
      <p className="text-[#151515] text-[14px] leading-6 font-normal my-3">
        Subscribe to receive our latest company updates
      </p>
      <div className="md:flex items-center justify-center gap-5">
        <input
          className="border border-[#C4C4C4] md:flex-1 rounded p-4 focus:outline-none text-[#6C757D] text-[14px] bg-transparent w-full"
          type="text"
          placeholder="Enter your email"
        />
        <button className="text-white py-4 px-7 my-5 rounded font-semibold text-center text-[18px] leadin-[21px] focus:outline-none bg-primary">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;

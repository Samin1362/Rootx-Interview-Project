import React, { forwardRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="max-w-[1240px] mx-auto mt-[30px] px-4">
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl text-center font-bold text-white bg-[#FF914E] p-4 rounded-lg">
          Contact
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-6 text-white">
        {/* Form */}
        <div className="md:w-1/2 bg-[#FF914E] py-10 px-8 flex flex-col gap-8 rounded-lg">
          <div className="flex flex-col">
            <label className="text-[#D9ECFF] mb-2">Your Name</label>
            <input
              type="text"
              placeholder="What’s your good name?"
              className="bg-[#edc1a5] text-[#839CB5] placeholder-[#000000] p-4 rounded-lg focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#D9ECFF] mb-2">Your Email</label>
            <input
              type="email"
              placeholder="What’s your email address?"
              className="bg-[#edc1a5] text-[#839CB5] placeholder-[#000000] p-4 rounded-lg focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-[#D9ECFF] mb-2">Your Message</label>
            <textarea
              placeholder="How can I help you?"
              rows={5}
              className="bg-[#edc1a5] text-[#839CB5] placeholder-[#000000] p-4 rounded-lg focus:outline-none"
            />
          </div>

          <button className="bg-[#EBF3FA] text-black w-fit px-6 py-3 flex items-center gap-2 rounded-lg hover:bg-gray-200 transition">
            <FaExternalLinkAlt />
            Send Message
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 w-[90%] p-3 bg-white bg-opacity-20 border-2 border-[#FF914E] rounded-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact Illustration"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
});

export default Contact;

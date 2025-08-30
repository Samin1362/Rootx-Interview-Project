import React from "react";
import { FaMessage } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-[30px]">
      {/* heading  */}
        <div>
          <h1 className="text-[40px] text-center font-bold text-white bg-[#FF914E] p-2 rounded-lg">
            Contact
          </h1>
        </div>

      {/* content */}
      <div className="flex flex-col-reverse mt-2 md:flex-row items-center text-white">
        <div className="md:w-1/2 bg-[#FF914E] py-[40px] px-[30px] flex flex-col gap-[30px]">
          <div className="flex flex-col">
            <label className="text-[#D9ECFF]" htmlFor="">Your name</label>
            <input type="text" className="bg-[#edc1a5] text-[#839CB5] placeholder:text-[#000000] p-[17px] rounded-lg" placeholder="What’s your good name?" />
          </div>
          <div className="flex flex-col">
            <label className="text-[#D9ECFF]" htmlFor="">Your email</label>
            <input type="email" className="bg-[#edc1a5] text-[#839CB5] placeholder:text-[#000000] p-[17px] rounded-lg" placeholder="What’s your email address?" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Your message</label>
            <textarea name="" placeholder="How can I help you?" className="bg-[#edc1a5] text-[#839CB5] placeholder:text-[#000000] p-[17px] rounded-lg" cols={30} rows={5}  id=""></textarea>
          </div>
          <div className="bg-[#EBF3FA] px-4 py-2 w-fit text-center flex items-center gap-2 rounded-lg">
            <FaExternalLinkAlt className="text-black" />
            <h1 className="text-black">Send Message</h1>
          </div>
        </div>
        <div className="md:w-1/2 w-[90%] p-3 bg-white bg-opacity-20 border-2 border-[#FF914E] rounded-lg">
          <img className="w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1682125235036-d1ab54136ff4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

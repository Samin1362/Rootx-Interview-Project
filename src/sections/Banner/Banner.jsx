import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Silk from "../../components/Silk/Silk";

const Banner = ({allData, contactRef}) => {
  const {name, bio, profileImage} = allData || {};
  return (
    <section className="max-w-[1240px] mx-auto w-full">
      {/* Navbar */}
      <Navbar contactRef={contactRef}/>

      {/* Banner Section */}

      <div className="relative w-full md:h-[500px] mt-[30px] lg:h-[600px] overflow-hidden">
        {/* Silk Background */}
        <div className="absolute inset-0">
          <Silk
            color="#FF914E"
            speed={1}
            scale={2}
            noiseIntensity={0.9}
            rotation={0}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-10 py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Left Side Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              This is{" "}
              <span className="underline text-white decoration-white/70">{name}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-md mx-auto md:mx-0">
              {bio}
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-white text-[#FF914E] px-6 md:px-8 py-3 md:py-4 rounded-2xl font-semibold shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
                Download CV
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="border-2 border-white/50 bg-white/20 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl">
              <img
                src={profileImage}
                alt="Banner Illustration"
                className="rounded-xl shadow-lg w-[80%] md:w-[300px] lg:w-[350px] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

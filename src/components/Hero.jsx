import React from "react";

const Hero = () => {
  return (
    <section
    id="home"
     className=" sm:px-12 lg:px-20 ">
      <div className=" min-h-screen flex items-center px-8 sm:px-12 lg:px-20 py-10 ">
        <div className="max-w-3xl flex flex-col gap-2 text-start">
          <h3 className="font-semibold text-lg sm:text-lg">Hi I am</h3>

          <h1 className="text-[#FD6F00] font-bold text-2xl sm:text-2xl md:text-3xl">
            Salman Khan
          </h1>

          <h2 className="text-black font-bold text-4xl sm:text-5xl md:text-6xl">
            Full Stack Developer
          </h2>

          <div className="max-w-lg">
            <p className="text-gray-600 text-sm sm:text-base font-light ">
              with expertise in React, Node.js, and MongoDB. I create dynamic
              and responsive web applications that deliver exceptional user
              experiences.
            </p>
          </div>

          <div className="flex justify-center sm:justify-start mt-6">
            <button className="w-full sm:w-40 h-11 rounded-lg font-light bg-[#FD6F00] text-white text-sm sm:text-base hover:opacity-90 transition">
              Hire Me
            </button>
          </div>
        </div>
        <div className=" lg:flex items-center justify-center ml-30">
          <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full bg-white overflow-hidden shadow-lg mx-auto">
            <img
              className="w-full h-full object-cover"
              src="src/assets/images/image.png"
              alt="profile picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

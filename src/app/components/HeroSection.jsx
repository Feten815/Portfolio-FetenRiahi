"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
                  const scrollToEmailSection = () => {
                    const emailSection = document.getElementById('emailSection');
                    if (emailSection) {
                      emailSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  };
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{""}
            </span>
            <br></br>
            <TypeAnimation
      sequence={[
        "Feten Riahi",
        2000,
        "Web Developer",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
          I&apos;m a passionate Full Stack Developer specializing in the
            development of interactive and responsive web applications. My skill
            set includes expertise in JavaScript, React, Node.js, Express, HTML,
            CSS, MongoDB, and Git. I&apos;m a fast learner, constantly seeking
            opportunities to broaden my knowledge and skills. My collaborative
            spirit makes me an enthusiastic team player, eager to work withbW
            others to craft exceptional applications.
            
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white" onClick={scrollToEmailSection}>
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-sla-800 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
              <a href="/CV-Feten-Riahi.pdf" download>Download CV</a>
              </span>
            </button>
        
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/imagefeten.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

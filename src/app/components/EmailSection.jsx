"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="emailSection"
      className=" my-12 md:my-12 py-24 px-12 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4  max-w-md">
          {" "}
          I&apos;m actively seeking new job opportunities, and I&apos;m enthusiastic about
          the prospect of joining your team. Whether you have a job opportunity
          or want to discuss my qualifications further, please feel free to
          reach out. Here are a few ways to connect with me: <br />
          <br/>
          <strong className="text-[#bf0691] font-bold">Email: fetenriahi22@gmail.com </strong><br/>
          <strong className="text-[#bf0691] font-bold">Phone: +216 25 802 591</strong>
        </p>
        <br/>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Feten815" target="blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/feten-riahi-a345b8296/"
            target="blank"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;

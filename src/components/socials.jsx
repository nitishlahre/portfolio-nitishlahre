import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { animate } from "framer-motion";
import Link from "next/link";

export default function Socials() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const targetPosition = section.offsetTop;
      const startPosition = window.scrollY;

      animate(startPosition, targetPosition, {
        duration: 0.8, // Animation duration in seconds
        ease: "easeInOut", // Easing function
        onUpdate: (value) => {
          window.scrollTo(0, value);
        },
      });
    }
  };

  const phoneNumber = "7987898043"; // Replace with target number (country code + number)
  const message = "Hello! Hope you doing well..."; // Your default message

  const urlEncodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${urlEncodedMessage}`;

  return (
    <>
      <div className="fixed bottom-0 left-0  mx-[4rem] my-[4rem] grid ">
        <div className="social-panel h-fit text-[25px]  ">
          <div className="mt-4 text-wrapper ">
            <Link href={whatsappURL} target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp className="hover:cursor-pointer hover:text-purple-600 animated-text transition-colors duration-200" />
            </Link>
          </div>
          <div className="mt-9 text-wrapper ">
            <Link href="mailto:nitishlahre31@gmail.com">
              <IoMail className="hover:cursor-pointer hover:text-purple-600 animated-text transition-colors duration-200" />
            </Link>
          </div>
          <div className="mt-10 text-wrapper">
            <Link href="https://github.com/nitishlahre">
              <FaGithub className="hover:cursor-pointer animated-text hover:text-purple-600 transition-colors duration-200" />
            </Link>
          </div>
          <div className="mt-10 text-wrapper">
            <Link href="https://www.linkedin.com/in/nitish-lahre/">
              <FaLinkedinIn className="hover:cursor-pointer animated-text hover:text-purple-600 transition-colors duration-200" />
            </Link>
          </div>
        </div>
      </div>
      <div className="name-logo fixed top-0 left-0 mx-[1rem] my-[3.5rem] text-wrapper   ">
        <button
          onClick={() => scrollToSection("header")}
          className="animated-text font-extrabold bg-purple-600 text-white px-2 rounded-sm"
        >
          NITISH LAHRE
        </button>
      </div>
    </>
  );
}

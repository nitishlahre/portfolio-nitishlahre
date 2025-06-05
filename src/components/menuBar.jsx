import React, { useEffect, useState } from "react";
import { animate } from "framer-motion";

export default function MenuBar() {
  const [activeSection, setActiveSection] = useState("");

  const sections = ["about", "projects", "contact"];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const targetPosition = section.offsetTop;
      const startPosition = window.scrollY;
      animate(startPosition, targetPosition, {
        duration: 0.8,
        ease: "easeInOut",
        onUpdate: (value) => {
          window.scrollTo(0, value);
        },
      });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let currentSection = "";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          if (
            scrollPosition >= offsetTop - 50 &&
            scrollPosition < offsetTop + offsetHeight - 50
          ) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <div className="main-text fixed top-0 right-0 p-[2.5rem]">
      {sections.map((section) => (
        <div key={section} className="text-wrapper font-bold">
          <button
            onClick={() => scrollToSection(section)}
            className={`animated-text transition-all duration-200 hover:text-purple-600 ${
              activeSection === section ? "text-purple-600" : "text-gray-700"
            }`}
          >
            {section.toUpperCase()}
          </button>
        </div>
      ))}
    </div>
  );
}

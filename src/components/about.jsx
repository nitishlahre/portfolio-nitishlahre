import React from "react";

function About() {
  return (
    <>
      <section id="about" className="h-fit px-4 md:px-16 lg:px-28">
        <h1 className="uppercase text-xl md:text-xl font-bold pt-8 md:pt-16 p-4 pl-0 text-purple-600">
          about
        </h1>
        <div className="flex flex-col lg:flex-row p-4 md:p-8 gap-6 lg:gap-20 about-parent">
          <div className="flex justify-center">
            <div className="card">
              <img
                src="/images/nitish-lahre.jpg"
                alt=""
                className="h-full w-32 md:w-full lg:w-full rounded-lg sm:w-full"
              />
            </div>
          </div>
          <div className="flex items-center justify-center p-4 md:p-10 font-bold text-sm md:text-lg lg:text-xl text-right">
            <div className="about-content flex-col">
              <h1>Hi, I'm Nitish Lahre</h1>
              <h1>
                I'm a skilled MERN Stack Developer with a strong focus on
                producing high-quality and impactful web experiences.
              </h1>
            </div>
          </div>
        </div>
        <div className="skills">
          <h1 className="uppercase text-xl md:text-xl font-bold pt-8 md:pt-10 p-4 pl-0 text-purple-600">
            skills & technologies
          </h1>
          <div className="p-4 uppercase overflow-hidden flex flex-wrap font-extrabold text-sm md:text-lg lg:text-2xl justify-center md:justify-evenly gap-3">
            <span className="skills-card hover-effect transition-colors duration-300">
              HTML
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              CSS
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              javascript
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              bootstrap
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              tailwind
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              react.js
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              redux
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              next.js
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              node.js
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              express.js
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              mongodb
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              mysql
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              postman
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              git
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              github
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              rest api
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              websocket
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              vercel
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              chatgpt
            </span>
            <span className="skills-card hover-effect transition-colors duration-300">
              gemini ai
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

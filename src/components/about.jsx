import React from "react";

function About() {
  return (
    <>
      <section id="about" className="h-fit px-40 ">
        <h1 className=" uppercase text-2xl font-bold pt-20 p-5 pl-0 text-purple-600">
          about
        </h1>
        <div className="flex p-10 gap-36 about-parent">
          <div className=" ">
            <div className="card   ">
              <img src="/images/nitish-lahre.jpg" alt="" className="h-fit" />
            </div>
          </div>
          <div className="flex items-center justify-center p-14 font-bold text-xl text-right">
            <div className="about-content  flex-col ">
              <h1>Hi, I'm Nitish Lahre</h1>
              <h1>
                I'm a skilled MERN Stack Developer with a strong focus on
                producing high-quality and impactful web experiences.
              </h1>
            </div>
          </div>
        </div>
        <div className="skills">
          <h1 className=" uppercase text-2xl font-bold pt-12 p-5 pl-0 text-purple-600">
            skills & technologies
          </h1>
          <div className="p-5 uppercase overflow-hidden flex flex-row font-extrabold text-2xl justify-evenly ">
            <span className="skills-card hover-effect transition-colors duration-300 ">
              HTML
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              CSS
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              javscript
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              bootstrap
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              tailwind
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              react.js
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              redux
            </span>
          </div>
          <div className="p-5 uppercase overflow-hidden flex flex-row font-extrabold text-2xl justify-evenly ">
            <span className="skills-card hover-effect transition-colors duration-300 ">
              next.js
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              node.js
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              express.js
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              mongodb
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              mysql
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              postman
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              git
            </span>
          </div>
          <div className="p-5 uppercase overflow-hidden flex flex-row font-extrabold text-2xl justify-evenly ">
            <span className="skills-card hover-effect transition-colors duration-300 ">
              github
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              rest api
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              websocket
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              vercel
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              chatgpt
            </span>
            <span className="skills-card hover-effect transition-colors duration-300 ">
              gemini ai
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

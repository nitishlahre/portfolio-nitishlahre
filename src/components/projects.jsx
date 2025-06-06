import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <>
      <div id="projects" className="h-fit pt-36 flex flex-col md:flex-row">
        <section className="w-full project-section">
          <div>
            <h1 className="text-2xl md:text-3xl px-10 md:px-40 pb-10 border-b-2 text-purple-600">
              projects
            </h1>
            <h1 className="text-6xl md:text-9xl hover-effect px-10 md:px-40 border-b-2">
              calculator
            </h1>
            <h1 className="text-6xl md:text-9xl hover-effect px-10 md:px-40 border-b-2">
              crud
            </h1>
            <Link href="https://task-manager-app-ecru-one.vercel.app/">
              <h1 className="text-6xl md:text-9xl hover-effect px-10 md:px-40 border-b-2">
                task manager
              </h1>
            </Link>
            <Link href="https://personal-finance-tracker-cxv8.vercel.app/">
              <h1 className="text-6xl md:text-9xl hover-effect px-10 md:px-40 border-b-2">
                finance tracker
              </h1>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
